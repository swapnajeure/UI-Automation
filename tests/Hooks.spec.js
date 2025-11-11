const { test, expect } = require('@playwright/test');

test("Home page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  // login
  await page.locator('#login2').click();
  await page.locator("#loginusername").fill('havanol123');
  await page.locator("#loginpassword").fill('havanol123');
  await page.locator("//button[normalize-space()='Log in']").click();

  // test products
  const products = page.locator('.hrefch');
  await expect(products).toHaveCount(9);

  // logout
  await page.waitForTimeout(3000);
  await page.locator('#logout2').click();
});

test.only("Place order", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  // login
  await page.locator('#login2').click();
  await page.locator("#loginusername").fill('havanol123');
  await page.locator("#loginpassword").fill('havanol123');
  await page.locator("//button[normalize-space()='Log in']").click();

  // TODO: Add product to cart, go to cart, place order, and logout

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
//Logout
  await page.locator('#logout2').click();
});
