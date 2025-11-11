export class Homepage{
    constructor(page){
        this.page=page;
        this.ProductList='//div[@id="tbodyid"]//div//h4/a';
        this.AddToCartButton='//a[normalize-space()="Add to cart"]';
        this.CartLink='#cartur';
    }
    
    async addToCart(productName){
        const productlist=await this.page.$$(this.ProductList);
        for(const product of productlist){
            const pname=await product.textContent();
            if(pname.includes(productName)){
                await product.click();
                break;
            }
        }
        await this.page.on('dialog',async dialog=>{
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()
        })
        await this.page.locator(this.AddToCartButton).click();
    }

async gotoCartPage(){
    await this.page.locator(this.CartLink).click();
    
}
}