import{test,expect, firefox} from '@playwright/test'

//only
/*test.only('Test 1',async({page})=>{
    console.log("This is Test 1")
})*/

//skip
/*test('Test 2 ',async({page,browserName})=>{
    console.log("This is Test 2")
    if(browserName==='firefox')
    {
        test.skip();
    }
})

test.skip('Test 3 ',async({page})=>{
    console.log("This is Test 3")
})*/

//Fixme
/*
test('Test 4 ',async({page})=>{

    test.fixme();
    console.log("This is Test 4")
})*/
//Fail
/*test('Test 5 ',async({page})=>{

    test.fail();
    console.log("This is Test 5")
    expect(1).toBe(1);
})
test('Test 5 ',async({page,browserName})=>{
if(browserName===firefox)
{
    test.fail();

}
    console.log("This is Test 5")
    
})*/

//slow
test('Test 5 ',async({page})=>{

    //test.slow();//increase time to triple
    test.setTimeout(5000)
    await page.goto("https://smartsense.ecolibrium.io/")
})


