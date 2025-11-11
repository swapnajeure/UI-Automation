const{test,expect}=require('@playwright/test')

test('Handle Radio Button',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
//Radiao Button

//await page.locator("//input[@id='female']").check();
await page.check("//input[@id='female']");

await expect(await page.locator("//input[@id='female']")).toBeChecked();
await expect(await page.locator("//input[@id='female']").isChecked()).toBeTruthy();

await expect(await page.locator("//input[@id='male']").isChecked()).toBeFalsy();


   
    

   await page.waitForTimeout(5000);

})