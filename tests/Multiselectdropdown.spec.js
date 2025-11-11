const{test,expect}=require('@playwright/test')

test('Handle MultiselectDropdown',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

//await page.locator('#colors').scrollIntoViewIfNeeded();

//await page.selectOption('#colors',['Blue', 'Red','Yellow']);

//Assertions
//Chek number of options in dropdown

//const options = await page.locator('#colors option')
//await expect(options).toHaveCount(7);

const options = await page.$$('#colors option')
await expect(options.length).toBe(7);

const content = await page.locator('#colors').textContent();
await expect(content.includes('Blue')).toBeTruthy();
await expect(content.includes('Black')).toBeTruthy();


//await page.waitForTimeout(5000);
})