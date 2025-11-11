const{test,expect}=require('@playwright/test');

test('Locating multiple Elements',async({page})=>{
 await page.goto('https://demoblaze.com/index.html');

 const links = await page.$$('a');

 /*for(const link of links)
 {
   const linktext= await link.textContent();
   console.log(linktext);
 }*/
await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
 const products=await page.$$("//div[@id='tbodyid']//div//h4/a")

 for(const pro of products)
 {
 const pname= await pro.textContent();
  console.log(pname);
 }


})