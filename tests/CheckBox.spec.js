const{test,expect}=require('@playwright/test')

test("Handle Check Box",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Single checkbox

    await page.locator("//input[@type='checkbox' and @id='sunday']").check();
    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked();
    await expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@type='checkbox' and@id='monday']").isChecked()).toBeFalsy();
    
    //Multiple Checkboxes

    const checkboxes=[
                       "//input[@type='checkbox' and @id='sunday']",
                       "//input[@type='checkbox' and@id='monday']",
                       "//input[@type='checkbox' and@id='saturday']"
    ];

    for (const locator of checkboxes)
    {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000);


    for (const locator of checkboxes)
        {
            if(await page.locator(locator).isChecked())
            await page.locator(locator).uncheck();
        }
    
    
    
    await page.waitForTimeout(5000);

})

