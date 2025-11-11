export class LogoutPage{
    constructor(page){
        this.page=page;
        this.logoutLink=page.locator('#logout2');
    }
    async logout(){
        await this.logoutLink.click();
        // Wait for logout to complete
        await this.page.waitForTimeout(1000);
    }
}