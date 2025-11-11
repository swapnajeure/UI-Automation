import{test,expect} from '@playwright/test'

test("Page",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:'tests/Screenshot/'+Date.now()+'Home Page.png'})

})

test("Full Page",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:'tests/Screenshot/'+Date.now()+'Full Page.png',fullPage:true})
    
})

test.only(" Element on Page",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")
 await page.locator("//div[@class='header-outer']").screenshot({path:'tests/Screenshot/'+Date.now()+'Element Page.png',})

    
})