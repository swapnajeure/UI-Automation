const{test,expect}=require('@playwright/test')

test('Input Box',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Input Box
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();


    await page.locator("//input[@id='name']").fill('john');
   // page.fill("//input[@id='name']",'John');

   await page.waitForTimeout(5000);

})