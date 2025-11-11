import{test,expect} from '@playwright/test'

test("Screenshot",async({page})=>{
    await page.goto("https://www.demoblaze.com/");

  // login
  await page.locator('#login2').click();
  await page.locator("#loginusername").fill('havanol123');
  await page.locator("#loginpassword").fill('havanol123');
  await page.locator("//button[normalize-space()='Log in']").click();
  await expect(page.locator('#logout2')).toBeVisible();
})