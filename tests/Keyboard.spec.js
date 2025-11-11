const{test,expect}=require('@playwright/test')

    test("Keyboard Actions",async({page})=>{

        await page.goto("https://gotranscript.com/text-compare")

        await page.fill("//textarea[@placeholder='Paste one version of the text here.']","Welcome to automation")

        await page.keyboard.press("Control+A");


        await page.keyboard.press("Control+C")

        await page.keyboard.down('Tab')

        await page.keyboard.up('Tab')

        await page.keyboard.press('Control+V')

        await page.waitForTimeout(5000);

    })
