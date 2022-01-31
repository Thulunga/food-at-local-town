import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="call" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order on call!</div>
          <div className={styles.text}>8638 113906</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          {/* <li className={styles.listItem}>Home Page</li>
          <li className={styles.listItem}>Products</li> */}
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Offers</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter} >2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
