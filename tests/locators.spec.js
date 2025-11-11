//const{test,expect} = require('@playwright/test')
import{test,expect} from '@playwright/test'

test('Locators:', async({page})=>{

    await page.goto("https://demoblaze.com/");
    //Click on login button---property
   // await page.locator('id=login2').click()
    await page.click('id=login2')
    //provide username --css
    //await page.click('id=loginusername')
    //await page.type('#loginusername','pavanol')

    await page.fill('#loginusername','pavanol')

    //provide password--css
    await page.fill('#loginpassword','test@123')
    //await page.type('#loginpassword','test@123')

    //click on login button

    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

    //verify logout link presence

    const logout=await page.locator('id=logout2')
    await expect(logout).toBeVisible();

    //Locate multiple webelements   const elements=await page.$$('Locator')

    await page.close();

})