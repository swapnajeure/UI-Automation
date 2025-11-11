const { test, expect}= require('@playwright/test')

test('AutoSuggest',async({page})=>{

    await page.goto('https://www.redbus.in/')


    const from=await page.getByRole('button', { name: ' From' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'From' }).fill('Pune');

    await page.waitForSelector("//div[contains(@class, 'listHeader___19289f')]")

    const city= await page.$$("//div[contains(@class, 'listHeader___19289f')]")
    for(let option of city)
    {
        const val=await option.textContent();
        if(val.includes('Swargate'))
        {
            await option.click();
            break;
        }
       // console.log(val);

    }
   
    
    await page.waitForTimeout(5000);

    
})