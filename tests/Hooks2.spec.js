const { test, expect } = require('@playwright/test');
let page
test.beforeAll(async({browser})=>{
    page=await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
    // login
    
  await page.locator('#login2').click();
  await page.locator("#loginusername").fill('havanol123');
  await page.locator("#loginpassword").fill('havanol123');
  await page.locator("//button[normalize-space()='Log in']").click();

})

test.afterAll(async()=>{
    // logout
  //await page.waitForTimeout(3000);
  await page.locator('#logout2').click();

})


test("Home page", async () => {
  

  

  // test products
  const products = page.locator('.hrefch');
  await expect(products).toHaveCount(9);

  
});

test("Place order", async () => {
 


  // TODO: Add product to cart, go to cart, place order, and logout

  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })

});
