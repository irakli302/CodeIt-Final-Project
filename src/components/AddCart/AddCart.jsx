'use client'
import styles from './AddCart.module.css'

const AddCart = ({product}) => {
    const handleAddCart = async () => {
        const results = await JSON.parse(localStorage.getItem("products"));
        if(results === null) {
            localStorage.setItem("products", JSON.stringify([product]));
        }
        else {
            localStorage.setItem("products", JSON.stringify([...results, product]));
        }
    }

    return(
        <button className={styles.cartButton} onClick={handleAddCart}>Add to Cart</button>
    );

}

export default AddCart;