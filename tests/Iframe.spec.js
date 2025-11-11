const{test,expect}=require('@playwright/test')

test('I Frame',async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
    const frame=await page.frames();
    console.log("Number of frames",frame.length)

    //App 1 - Using name/url of the page
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill("[name='mytext1']","Hello");

    //Approach 2--Using Frame locator

   const inputbox= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
inputbox.fill("Hello")
    await page.waitForTimeout(5000);
})