import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { name: '320px_very_narrow', width: 320, height: 640 },
  { name: '360px_compact', width: 360, height: 740 },
  { name: '375px_iphone_se', width: 375, height: 667 },
  { name: '390px_iphone_14', width: 390, height: 844 },
  { name: '430px_pro_max', width: 430, height: 932 },
  { name: '768px_tablet', width: 768, height: 1024 },
  { name: '1024px_laptop', width: 1024, height: 768 },
  { name: '1440px_desktop', width: 1440, height: 900 },
];

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/menu', name: 'menu' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
];

const OUTPUT_DIR = '/home/thededax/.gemini/antigravity/brain/85655dcf-7128-46ad-8e40-169cf983ee06/scratch/baseline';
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    headless: true,
  });

  const results = [];

  for (const route of ROUTES) {
    const url = `http://localhost:3000${route.path}`;
    console.log(`\n=== Auditing Route: ${route.path} ===`);

    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });

      // Wait for Loader to finish (Loader timer is 1100ms)
      await new Promise(r => setTimeout(r, 1600));
      try {
        await page.waitForSelector('main, footer', { timeout: 4000 });
      } catch (e) {}

      const evaluation = await page.evaluate((vpWidth) => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const winWidth = window.innerWidth;
        const hasHorizontalScroll = docWidth > winWidth || bodyWidth > winWidth;

        // Find elements that overflow horizontally
        const overflowingElements = [];
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          const rect = el.getBoundingClientRect();
          if (rect.right > winWidth + 1 && rect.width > 0 && rect.height > 0) {
            const tagName = el.tagName.toLowerCase();
            const id = el.id ? `#${el.id}` : '';
            const className = typeof el.className === 'string' && el.className ? `.${el.className.split(' ').slice(0, 3).join('.')}` : '';
            overflowingElements.push({
              selector: `${tagName}${id}${className}`,
              rectRight: Math.round(rect.right),
              rectWidth: Math.round(rect.width),
              overflowPx: Math.round(rect.right - winWidth),
            });
          }
        }

        // Measure section heights
        const sections = Array.from(document.querySelectorAll('section, main > div, header, footer')).map(s => {
          const rect = s.getBoundingClientRect();
          const tag = s.tagName.toLowerCase();
          const id = s.id ? `#${s.id}` : '';
          const cls = typeof s.className === 'string' && s.className ? `.${s.className.split(' ').slice(0, 2).join('.')}` : '';
          return {
            name: `${tag}${id}${cls}`,
            height: Math.round(rect.height),
            top: Math.round(rect.top),
          };
        });

        // Measure headings
        const headings = Array.from(document.querySelectorAll('h1, h2, h3')).slice(0, 8).map(h => {
          const computed = window.getComputedStyle(h);
          return {
            text: h.textContent.trim().slice(0, 30),
            fontSize: computed.fontSize,
            lineHeight: computed.lineHeight,
            marginBottom: computed.marginBottom,
          };
        });

        return {
          winWidth,
          docWidth,
          hasHorizontalScroll,
          overflowCount: overflowingElements.length,
          topOverflowElements: overflowingElements.slice(0, 5),
          sections: sections.slice(0, 10),
          headings,
        };
      }, vp.width);

      // Save screenshot for 375px and 1440px
      if (vp.width === 375 || vp.width === 1440) {
        const shotPath = path.join(OUTPUT_DIR, `${route.name}_${vp.width}px.png`);
        await page.screenshot({ path: shotPath, fullPage: false });
      }

      results.push({
        route: route.path,
        viewport: vp.name,
        width: vp.width,
        ...evaluation,
      });

      console.log(`[${vp.name}] winWidth:${evaluation.winWidth} docWidth:${evaluation.docWidth} overflow:${evaluation.hasHorizontalScroll ? 'YES (' + evaluation.overflowCount + ' items)' : 'NO'}`);
      if (evaluation.hasHorizontalScroll) {
        console.log('  Top overflowing elements:', evaluation.topOverflowElements);
      }

      await page.close();
    }
  }

  await browser.close();

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'audit_report.json'),
    JSON.stringify(results, null, 2)
  );
  console.log(`\nAudit complete! Results saved to ${OUTPUT_DIR}/audit_report.json`);
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
