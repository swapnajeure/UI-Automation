const{test,expect}=require('@playwright/test')

test("Upload file",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator("//input[@id='singleFileInput']").click()

    await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/HP/Downloads/Regression-2025 Bugslist.xlsx")

    await page.locator("//button[normalize-space()='Upload Single File']").click();

    await page.waitForTimeout(5000);
})

test.only("Multiple files",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(["C:/Users/HP/Downloads/ISSUES-4212.doc","C:/Users/HP/Downloads/ISSUES-6588.doc"]);

    await page.waitForTimeout(5000);

     expect(page.locator("#fileList li:nth-child(1)")).toHaveText("ISSUES-4212.doc")
     expect(page.locator("#fileList li:nth-child(2)")).toHaveText("ISSUES-6588.doc")

    await page.waitForTimeout(5000);
//Removing files
    await page.locator("#filesToUpload").setInputFiles([]);
    await page.waitForTimeout(5000);

    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");
    await page.waitForTimeout(5000);
})