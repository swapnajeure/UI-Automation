const {test,expect}=require('@playwright/test')
test("Datepicker", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
/*
    await page.fill('#datepicker','09/12/2025')
    await page.waitForTimeout(2000);

    await page.fill('#txtDate','18/09/2025')
    await page.waitForTimeout(2000);

*/

//Date Picker

const year="2024"
const month="October"
const date= "18"

await page.click('#datepicker')

while(true)
{

    const currentmonth=await page.locator('.ui-datepicker-month').textContent();
    const currentyear=await page.locator(".ui-datepicker-year").textContent()

    if(currentyear==year && currentmonth==month)
        {
           break;
        }

        //await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click(); //Next
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click(); //Previous
}

/*

                     const dates=  await page.$$(".ui-state-default")
                     for(const dt of dates)
                     {
                        if(await dt.textContent()==date)
                        {
                            await dt.click();
                            break;
                        }
                     }
*/

await page.locator(`//a[@class='ui-state-default'][normalize-space()='${date}']`).click();

await page.waitForTimeout(5000);
    //await page.fill('#start-date','19-09-2025')
})