import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 200, color = "#f4c430" }: { count?: number; color?: string }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 3 + 1;
      speeds[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, sizes, speeds };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += particles.speeds[i] * 0.01;
        positions[i * 3] += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.002;
        
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -10;
        }
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.08}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
      ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3 + position[1]) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  showOrbs?: boolean;
}

export function ParticleField({
  className = "",
  particleCount = 150,
  showOrbs = true,
}: ParticleFieldProps) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#f4c430" />
        <Particles count={particleCount} />
        {showOrbs && (
          <>
            <FloatingOrb position={[-3, 2, -2]} color="#f4c430" scale={1.5} />
            <FloatingOrb position={[4, -1, -3]} color="#fc7127" scale={1} />
            <FloatingOrb position={[1, 3, -4]} color="#f4c430" scale={0.8} />
            <FloatingOrb position={[-2, -3, -2]} color="#755b00" scale={1.2} />
          </>
        )}
      </Canvas>
    </div>
  );
}
