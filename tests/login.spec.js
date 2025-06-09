
import test from "playwright/test"
import { chromium } from 'playwright-extra';
import stealth from 'playwright-extra-plugin-stealth';

chromium.use(stealth());

test('testing',async ({ page }) => {
    const browser = await chromium.launch({
        headless: false, 
        slowMo: 50        
    });
    const context = await browser.newContext({
        viewport: { width: 1280, height: 800 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    await page.goto("https://koreanembassynepal.org", {waitUntil: "domcontentloaded"})
    await page.waitForTimeout(5000);
    await page.locator("//label[@class='cb-lb']/input[@type='checkbox']").check();
    console.log("the title of the page is ", page.title)
    console.log("page", page)
})
