import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem, CartItem } from "../types/menu";
import { toast } from "sonner";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  getItemQuantity: (itemId: string) => number;
  totalCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  sendWhatsAppOrder: (details?: {
    name?: string;
    phone?: string;
    address?: string;
    orderType?: string;
    notes?: string;
  }) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "desi_chulha_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success(`Added ${item.name} to order tray`, {
      description: `${item.price} • Tap Order Tray to review`,
      duration: 2000,
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemQuantity = (itemId: string) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.priceNum * item.quantity,
    0
  );

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const sendWhatsAppOrder = (details = {}) => {
    if (cartItems.length === 0) {
      toast.error("Your order tray is empty. Add dishes first!");
      return;
    }

    const {
      name = "Guest Diner",
      phone = "",
      address = "Local Delivery / Takeaway",
      orderType = "Delivery",
      notes = "",
    } = details as any;

    let message = `🔥 *NAMASTE DESI CHULHA!* 🔥\n`;
    message += `I would like to place an order from your online menu:\n\n`;

    cartItems.forEach((item, index) => {
      const itemSubtotal = item.priceNum * item.quantity;
      const vegIcon = item.isVeg ? "🟢 [Veg]" : "🔺 [Non-Veg]";
      message += `${index + 1}. *${item.name}* ${vegIcon}\n   Qty: ${item.quantity} × ${item.price} = ₹${itemSubtotal}\n`;
    });

    message += `\n───────────────\n`;
    message += `*Total Order Value:* ₹${subtotal.toLocaleString("en-IN")}\n`;
    message += `*Order Type:* ${orderType}\n`;
    message += `*Customer Name:* ${name}\n`;
    if (phone) message += `*Contact:* ${phone}\n`;
    message += `*Address / Table:* ${address}\n`;
    if (notes) message += `*Special Instructions:* ${notes}\n`;
    message += `───────────────\n`;
    message += `Please confirm order preparation and ETA. Dhanyavaad! 🙏`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast.success("Order forwarded to WhatsApp!", {
      description: "Our kitchen team is reviewing your items.",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemQuantity,
        totalCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
