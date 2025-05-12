"use client"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.links}>
            <a href="#" className={styles.link}>About Us</a>
            <a href="#" className={styles.link}>Customer Support</a>
            <a href="#" className={styles.link}>Terms & Conditions</a>
          </div>
          <div className={styles.copy}>
            © 2025-2026, AkliShop.com, Inc. or its affiliates
          </div>
        </footer>
      );
}

export default Footer;