const{test,expect}=require('@playwright/test')

test("Right Click",async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
     
   const button= page.locator("//span[@class='context-menu-one btn btn-neutral']")

   await button.click({button:'right'});

   await page.waitForTimeout(5000);

})