const {test,expect}=require('@playwright/test')

 test('Mousehover',async({page})=>{
 await page.goto("https://demo.opencart.com/")

 const desktop=await page.locator("//a[normalize-space()='Desktops']")
 const mac = await page.locator("//a[normalize-space()='Mac (1)']")

 await desktop.hover();
 await mac.hover();

 await page.waitForTimeout(5000);


})