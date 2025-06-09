import { chromium } from "playwright/test";

(async() => {
    const browser = await chromium.launch({headless: false,})
    const page = await browser.newPage()
    await page.goto("https://koreanembassynepal.org");

    await page.waitForTimeout(Math.floor(Math.random() * 4000 + 1000));
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForLoadState();
    await page.waitForTimeout(5000)
    await page.locator("//label[@class='cb-lb']/input[@type='checkbox']").check()
    
    console.log("await to get page title", await page.title())
})()