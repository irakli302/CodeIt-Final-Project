'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
const page = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const getProductsFromLocalStorage = async () => {
        const products = await JSON.parse(localStorage.getItem("products"));
        setCartProducts(products);
    };

    useEffect(() => {
        getProductsFromLocalStorage();
    },  []);

    return (
        <div className={styles.container}>
          {cartProducts.map((product) => (
            <div>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      );
}

export default page;