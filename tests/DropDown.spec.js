const{test,expect}=require('@playwright/test')

test("Handle Dropdown",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select options from dropdown

    //await page.locator('#country').selectOption({label:'India'});  // visible text with label
     //await page.locator('#country').selectOption('India');  //visible text
      //await page.locator('#country').selectOption({value:'uk'});  //using value

    //await page.locator('#country').selectOption({index:1});  //using index

    //
    // await page.selectOption("#country",'India');

    //Assertions
    //1)check number of options in dropdown

    //const options= await page.locator('#country option');
    //await expect(options).toHaveCount(10);

//2)number of options approach 2
//const options= await page.$$('#country option');
//console.log("Number of options:",options.length);

//await expect(options.length).toBe(10);

//3)Check presense of value in dropdown--Approach 1
//const content = await page.locator('#country').textContent();
//await expect(content.includes('India')).toBeTruthy();
const options = await page.$$('#country option');
let status = false;

for (const option of options) {
  const text = await option.textContent(); // Get visible text
  if (text.includes('France')) {
    const value = await option.getAttribute('value'); // Get actual value
    await page.locator('#country').scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    await page.selectOption('#country', value);
    status = true;
    
    await page.waitForTimeout(5000);
    break;
    
  }
}
})

//expect(status).toBeTruthy();
