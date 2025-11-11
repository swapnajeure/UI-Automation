import{test,expect} from '@playwright/test'


test.beforeAll(async()=>{
    console.log("This is Before all hook")
})
test.afterAll(async()=>{
    console.log("This is After all hook")
})
test.beforeEach(async()=>{
    console.log("This is Before each hook")
})

test.afterEach(async()=>{
    console.log("This is after each hook")
})

test.describe.only("Group1",()=>{

test("Test1",async({page})=>{

    console.log("This is Test 1")
})
test("Test2",async({page})=>{

    console.log("This is Test 2")
})
})


test.describe("Group2",()=>{
test("Test3",async({page})=>{

    console.log("This is Test 3")
})
test("Test4",async({page})=>{

    console.log("This is Test 4")
})

})





