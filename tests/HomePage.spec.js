const{test ,expect}=require('@playwright/test');

test('Home Page',async ({page})=>{                      // js is asynchronizes programming language

   await  page.goto('https://demoblaze.com/');
   const pageTitle=await page.title();
   console.log("pageTitle:",pageTitle);
   await expect(page).toHaveTitle('STORE');
   const pageurl=page.url();
   console.log("pageUrl:",pageurl);
   await expect(page).toHaveURL('https://demoblaze.com/');
   page.close();

})