class InventoryPage {
    elements = {
        title: () => cy.get('.title'),
        addToCartBtn: (itemName) => cy.contains('.inventory_item', itemName).find('button'),
        cartBadge: () => cy.get('.shopping_cart_badge')
    }

    addItemToCart(itemName) {
        this.elements.addToCartBtn(itemName).click();
    }
}

module.exports = new InventoryPage();
