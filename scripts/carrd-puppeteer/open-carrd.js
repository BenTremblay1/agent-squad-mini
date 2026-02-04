const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    userDataDir: './.profile',
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(60_000);

  await page.goto('https://carrd.co/', { waitUntil: 'networkidle2' });
  console.log('Opened Carrd. Log in manually if needed.');
  console.log('Close the browser window when done.');

  // Keep process alive until the browser is closed.
  browser.on('disconnected', () => process.exit(0));
})();
