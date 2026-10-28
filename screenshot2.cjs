const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const sizes = [
    { name: 'mobile', width: 360, height: 740 },
    { name: 'desktop', width: 1280, height: 800 },
  ];
  for (const s of sizes) {
    const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
    await page.goto('http://127.0.0.1:4500/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    // Scroll past the sales intro into the pinned pot stage
    await page.mouse.wheel(0, s.height * 1.3);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `/tmp/stage-${s.name}-1.png` });
    await page.mouse.wheel(0, s.height * 1.5);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `/tmp/stage-${s.name}-2.png` });
    await page.mouse.wheel(0, s.height * 1.5);
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `/tmp/stage-${s.name}-3.png` });
    await page.close();
  }
  await browser.close();
})();
