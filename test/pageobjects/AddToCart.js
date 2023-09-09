class AddToCart {
    static async dynamicProductSelection() {
        const ProductSelection = await browser.$$('//button[text()="Add to cart"]');
        const Prod = ProductSelection.length;
    
        if (Prod === 0) {
          throw new Error("No Product availiable for selection");
        }
        const randomIndex = Math.floor(Math.random() * Prod);
    
        // clicking on trim selexction tab with randomly generated indexes.
        await ProductSelection[randomIndex].click();
      }
}
module.exports = AddToCart
