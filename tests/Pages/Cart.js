class CartPage{
    constructor(page){
        this.page=page;
        this.noofproducts='//tbody[@id="tbodyid"]//tr//td[2]';
    }

    async checkproductsinCart(productName){
        const productlist=await this.page.$$(this.noofproducts);
        for(const product of productlist){
            const pname=await product.textContent();
            if(pname.includes(productName)){
                return true;

            }
        }
    }
}