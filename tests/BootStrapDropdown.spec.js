const{test,expect}=require('@playwright/test')

test('Handle Bootstrap dropdown',async({page})=>
{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/')


    await page.locator('#justAnInputBox').click();


    await page.waitForTimeout(5000);

const options = await page.locator("//input[@id='justAnInputBox']/ancestor::div[contains(@class,'comboTree')]//input[@type='checkbox']//span[@class='comboTreeItemTitle']");  
  /*for(let option of options)
    {
        const value=await option.textContent();
        console.log("value is:",value)
    }*/
    
    await expect(options).toHaveCount(15);
    
})