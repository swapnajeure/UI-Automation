import { test, expect } from '@playwright/test';
test('Assertions',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

   await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

   await expect(page).toHaveTitle('nopCommerce demo store. Register');

   const logo=await page.locator("//img[@alt='nopCommerce demo store']");
   await expect(logo).toBeVisible();

   const search=await page.locator("#small-searchterms");
   await expect(search).toBeEnabled();

  //Radio button
  const radio= await page.locator('#gender-male');
  await radio.click();
  await expect(radio).toBeChecked();

  //Check box

  const checkbx=await page.locator('#Newsletter');
  await expect(checkbx).toBeChecked();

//To have attribute

   const attri=await page.locator('#register-button');
   await expect(attri).toHaveAttribute('type','submit');

   //Element matches ttext

   await expect(await page.locator('.page-title h1')).toHaveText('Register');

   //Element contains text
   await expect(await page.locator('.page-title h1')).toContainText('Reg'); //Partial text


   //Input has value
const emailinput=await page.locator('#Email')
await emailinput.fill('test@demo.com');
await expect(emailinput).toHaveValue('test@demo.com');

//list of elements has given length//tohavecount()





   


})