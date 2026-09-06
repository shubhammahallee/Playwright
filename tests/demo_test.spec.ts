import { test } from '@playwright/test' 

test('hub testing', async ({ page }) => { 
    await page.goto("https://de.pornhub.org/");
    await page.waitForTimeout(2000);
    await page.locator("//button[normalize-space()='Ich bin 18 oder älter - Eingabe']").click();
    await page.locator("//li[@class='page_next omega']//a[@class='orangeButton']").click()
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(@class, 'js-acceptGlobalCookies')]").click();
    await page.locator("//a[@title='ourdream | Dschungel-Versucherin Larissa entblößt sich im Alien-Dschungel']").click();

    // Skip ad with error handling
    try {
        await page.locator("//button[contains(text(), 'Werbung')]").waitFor({ state: 'visible', timeout: 5000 });
        await page.locator("//button[contains(text(), 'Werbung')]").click(); 
    } catch (e) {
        console.log("Skip button not found, continuing..."); 
    }

    // Wait for page to load (reduce from 150000 to reasonable time)
    await page.waitForTimeout(10000);
    await page.screenshot({ path: "./screenshots/successfully login.png" });
});

test('Search Testing', async ({ page }) => {
    await page.goto("https://de.pornhub.org/video"); 

    // Age verification
    await page.locator("//button[normalize-space()='Ich bin 18 oder älter - Eingabe']").click();

    // Accept cookies
    await page.locator("//button[contains(@class, 'js-acceptGlobalCookies')]").click();

    // Search  
    const search = page.locator("//input[@id='searchInput']"); 
    await search.fill("Pink");
    await search.press('Enter');



    // Click first video result (more robust than long title)
    await page.locator("//a[@title='♥︎ Heiße großbrüstige Brünette züchten und sie zum Schreien ♥bringen ︎ Creampie nach HARTEM Missionar ohne Verhütung - Candy Love POV']").first().click();
    await page.locator("//button[contains(text(), 'Werbung')]").click(); 

    await page.waitForLoadState('networkidle');

    await page.screenshot({ path: "./screenshots/Search Testing.png" });
});

