const { test, expect } = require('@playwright/test');

test('SmartSense Login + User Management Automation', async ({ page }) => {
    // Navigate to the SmartSense login page
    await page.goto('https://smartsense.ecolibrium.io/', { waitUntil: 'domcontentloaded' });

    // Login
    await page.locator('input[name="username"], input[id="username"]').fill('CF@ecolibrium.io');
    await page.locator('input[type="password"]').fill('73975ad2a14533fbf17d2862a4332e8f');
    await page.locator('button:has-text("Login")').click();

    // Wait for dashboard page to load
   // await expect(page).toHaveURL(/.*dashboard.*/i, { timeout: 15000 });

   // console.log('✅ Login successful');

    // ===== Navigate to User Management =====
    // Click on Menu or Settings if needed
    await page.locator('a:has-text("User Management"), button:has-text("User Management")').click();

    // Wait for the user list table to load
    const userRows = page.locator('table tbody tr'); // Adjust selector if different
    await expect(userRows.first()).toBeVisible({ timeout: 10000 });

    // Get user names from the first column
    const count = await userRows.count();
    console.log(`📋 Found ${count} users:`);
    for (let i = 0; i < count; i++) {
        const username = await userRows.nth(i).locator('td').first().textContent();
        console.log(`- ${username.trim()}`);
    }
});
