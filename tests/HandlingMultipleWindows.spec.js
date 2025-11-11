import{test,expect,chromium} from '@playwright/test'
test("Handle Multiple Windows",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();
    const page2=await context.newPage();

    const allpages=await context.pages();

    console.log("Number of pages",allpages.length);
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    
})
test.only("Handle Multiple pages/Windows",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page1=await context.newPage();
    

    const allpages=await context.pages();

    console.log("Number of pages",allpages.length);
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagepromise=context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newpage=await pagepromise;
    

    
    await expect(newpage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    
    await browser.close();
    
})