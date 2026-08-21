import { test, expect, chromium } from '@playwright/test';


test('Basic Demo Test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://apps.credence.in/practice/");
    await expect(page.getByText('Practice Page')).toBeVisible();
    await page.getByLabel('Radio3').check();
    await page.locator('//input[@id="autocomplete"]').fill('India');


    await page.close();
    await browser.close();
});

