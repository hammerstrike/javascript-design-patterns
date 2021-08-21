/**
 * MODULE PATTERN
 * - Loose coupling : Keep piece of code independant from other component
 * - Provides encapsulation / privacy i.e protecting state and behaviour from being
 *   accessed from other components
 * - Only expose what is needed in the form of object
 */

 const Cart = (()=>{

    const cart = {
        items : [],
        price : 0
    };

    // Private
    const calculatePrice = () => {
        cart.price = 0;
        cart.items.forEach( item => {
            cart.price += item.price;
        });
    }

    const addItem = (item) => {
        cart.items.push(item);
        calculatePrice();
    }
    
    const removeItem = (index) => {
        cart.items.splice(index, 1);
        calculatePrice();
    }

    return {
        getItems : () => [...cart.items],
        getPrice : () => cart.price,
        addItem,
        removeItem
    }

})();

Cart.addItem({name : 'shirt', price : 100});
console.log('Cart', Cart.getItems(), 'Price', Cart.getPrice());

Cart.addItem({name : 'short', price : 50});
console.log('Cart', Cart.getItems(), 'Price', Cart.getPrice());
