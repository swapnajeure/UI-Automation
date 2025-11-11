const { test, expect } = require('@playwright/test');

test("Webtable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator('#productTable');

  // Number of rows and columns
  const col = table.locator('thead tr th');
  console.log("Number of columns:", await col.count());

  const row = table.locator("tbody tr");
  console.log("Number of rows:", await row.count());

  expect(await col.count()).toBe(4);
  expect(await row.count()).toBe(5);

  // Find the row that has "Smartwatch"
  //const matchedRow = row.filter({
   // hasText: 'Smartwatch'
 // });

  // Inside that row, find the checkbox and check it
  //await matchedRow.locator('input[type="checkbox"]').check();

 // await page.waitForTimeout(5000);

  //Select multiple products by reusing same function
    await SelectProduct(row , page, 'Smartphone' )
    await SelectProduct(row , page, 'Laptop' )
    await SelectProduct(row , page, 'Tablet' )


//Capture all data from table
 /*for(let i=0;i<await row.count();i++)
 {
    const curretrow = row.nth(i);
    const ids = curretrow.locator('td')
    for(let j=0;j<await ids.count()-1;j++)
    {
        console.log(await ids.nth(j).textContent())
    }
 }*/

    //Read data from all pages in the table

   const pages= await page.locator('.pagination li a')
  console.log("Number of pages", await pages.count());

   for(let p=0; p<await pages.count();p++)      
   {
      if(p>0)
      {
        await pages.nth(p).click();     
      }
      for(let i=0;i<await row.count();i++)
     {
    const curretrow = row.nth(i);
    const ids = curretrow.locator('td')
    for(let j=0;j<await ids.count()-1;j++)
    {
        console.log(await ids.nth(j).textContent())
    }
     }
     
     await page.waitForTimeout(3000);
   }

    await page.waitForTimeout(5000);





});

async function SelectProduct(row,page,Name)
{
     const matchedRow = row.filter({
    hasText: Name
  });

  // Inside that row, find the checkbox and check it
  await matchedRow.locator('input[type="checkbox"]').check();

}
