import { test, expect, chromium } from '@playwright/test';


test('Basic Demo Test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://apps.credence.in/practice/");

    await page.close();
    await browser.close();
});

