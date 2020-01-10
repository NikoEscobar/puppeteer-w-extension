const puppeteer = require('puppeteer');

(async () => {
  // const args = await puppeteer.defaultArgs().filter(arg => String(arg).toLowerCase() !== '--disable-extensions');
  const browser = await puppeteer.launch({headless: false, ignoreDefaultArgs: true, args: [
      '--disable-extensions-except=/home/escobar/.config/google-chrome/Default/Extensions/ppnbnpeolgkicgegkbkbjmhlideopiji',
      '--load-extension=/home/escobar/.config/google-chrome/Default/Extensions/ppnbnpeolgkicgegkbkbjmhlideopiji',
    ]})

  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'hospitalsaoluisdaroca.png'});
  await page.waitFor(10000);
  await browser.close();
})();


