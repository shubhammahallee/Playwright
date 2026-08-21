import { test, expect, chromium } from '@playwright/test';


test('Basic Demo Test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://apps.credence.in/practice/");
    await expect(page.getByText('Practice Page')).toBeVisible();
    await page.getByLabel('Radio3').check();
    await page.locator('//input[@id="autocomplete"]').fill('India');
    await page.locator('//select[@id="dropdown-class-example"]').selectOption('Option3');
    await page.getByLabel('Option3').check();
    await page.locator("//label[@for='male']").click();
    await page.screenshot({ path: "./screenshots/screenshot.png" });


    await page.close();
    await browser.close();
    await context.close();
});

