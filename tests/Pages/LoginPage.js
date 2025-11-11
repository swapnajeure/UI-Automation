export class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink=page.locator('#login2');
        this.usernameInput=page.locator('#loginusername');
        this.passwordInput=page.locator('#loginpassword');
        this.loginButton=page.locator('//button[normalize-space()="Log in"]')
    }
    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/');
    }
    async login(username,password){
        await this.loginLink.click();
        // Wait for login modal to appear
        await this.usernameInput.waitFor({ state: 'visible', timeout: 5000 });
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        // Wait for login to complete - the logout button should appear
        await this.page.waitForTimeout(1000);
    }
}