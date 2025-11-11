import{test,expect} from '@playwright/test'
import{LoginPage} from './Pages/LoginPage'
import{Homepage} from './Pages/Homepage'
import{CartPage} from './Pages/Cart'
import{LogoutPage} from './Pages/Logout'

test('POM Test',async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('havanol123','havanol123');
    //await expect(page.locator('#logout2')).toBeVisible();
    await page.waitForTimeout(7000);

//Home Page
    const homepage=new Homepage(page);
    await homepage.addToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await homepage.gotoCartPage();
    //await expect(page.locator('#cartur')).toBeVisible();
    //Cart Page
    const cartPage=new CartPage(page);
    await cartPage.checkproductsinCart('Nexus 6');
    await expect(cartPage.checkproductsinCart('Nexus 6')).toBeTruthy();
    await page.waitForTimeout(3000);
    //Logout Page
    const logoutPage=new LogoutPage(page);
    await logoutPage.logout();
    await expect(page.locator('#login2')).toBeVisible();
    await page.waitForTimeout(3000);
})