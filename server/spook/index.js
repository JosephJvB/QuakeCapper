const puppeteer = require('puppeteer')

cap()

async function cap (mon) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.twitch.tv/ayoitsjoevanbo', { waitUntil: 'domcontentloaded' })
  await page.waitFor(4000)
  await page.screenshot({ path: './test.png' })
  browser.close()
}

// works but no renderer for the video..
