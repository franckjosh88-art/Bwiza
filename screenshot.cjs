const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const sizes = [
    { name: 'mobile', width: 360, height: 740 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
  ];
  for (const s of sizes) {
    const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
    await page.goto('http://127.0.0.1:4500/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800); // laisser jouer l'animation d'entrée
    await page.screenshot({ path: `/tmp/hero-${s.name}.png` });
    await page.close();
  }
  await browser.close();
})();
