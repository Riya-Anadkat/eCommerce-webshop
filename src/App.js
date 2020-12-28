import React, { useState, useEffect } from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart} from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        // passing parameters to the api to add to cart

        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    // only runs at the start

    console.log(cart);

    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
            <Cart cart= {cart} />
        </div>
    )
}

export default App
