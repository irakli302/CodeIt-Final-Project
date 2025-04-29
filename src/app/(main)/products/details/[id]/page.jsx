import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AddCart from "@/components/AddCart/AddCart";

const page = async ({ params }) => {
  const { id } = params; 

  let product;
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    product = await data.json();
    console.log(product);
  } catch (error) {
    throw Error("Something went wrong!");
  }

  return (
    <main className={styles.main}>
      <div className={styles.productContainer}>
      <div className={styles.productImage}>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className={styles.image}
      />
      </div>
      <div className={styles.productInformation}>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price}</p>
      </div>
      <Link prefetch={false} href="/products">
          <button className={styles.button}>Back to products page</button>
        </Link>
        <AddCart product={product}/>
      </div>
    </main>
  );
};

export default page;
