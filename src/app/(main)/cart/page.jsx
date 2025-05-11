'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image';
const Page = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const getProductsFromLocalStorage = async () => {
        const products = await JSON.parse(localStorage.getItem("products"));
        setCartProducts(products);
    };

    const handleAddToCart = async (product) => {
      const results = await JSON.parse(localStorage.getItem("products"));
      const index = results.findIndex((item) => item.product.id === product.id);
      results[index].count++;
      setCartProducts(results);
      localStorage.setItem("products", JSON.stringify([...results]));
    };

    const handleRemoveToCart = async (product) => {
      const results = await JSON.parse(localStorage.getItem("products"));
      const index = results.findIndex((item) => item.product.id === product.id);
      results[index].count--;
        if(results[index].count <= 0) {
          results.splice(index, 1);
        }
      localStorage.setItem("products", JSON.stringify(results));
      setCartProducts(results);
    };

    useEffect(() => {
        getProductsFromLocalStorage();
    },  []);

    return (
        <div className={styles.container}>
          {cartProducts?.map((product) => (
            <div key={product.product.id} className={styles.productWrapper}>
              <Image 
                src= {product.product.image}
                alt = "product image"
                width = {70}
                height = {70}
              />
              <div className={styles.productInfo}>
              <p>{product.count} ცალი: </p>
              <h4>{product.product.title}</h4>
              </div>
              <div className={styles.buttonWrapper}>
              <button className={styles.buttonAdd} onClick={() => handleAddToCart(product.product)}>Add 1</button>
              <button className={styles.buttonRem} onClick={() => handleRemoveToCart(product.product)}>Remove 1</button>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Page;