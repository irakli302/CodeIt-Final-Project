"use client"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
          <div className={styles.links}>
            <a href="#" className={styles.link}>Conditions of Use</a>
            <a href="#" className={styles.link}>Privacy Notice</a>
            <a href="#" className={styles.link}>Interest-Based Ads</a>
          </div>
          <div className={styles.copy}>
            © 2025-2026, AkliShop.com, Inc. or its affiliates
          </div>
        </footer>
      );
}

export default Footer;