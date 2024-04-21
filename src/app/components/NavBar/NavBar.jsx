"use client";

import styles from "./NavBar.module.scss";
import React, { useState, useRef } from "react";
import Link from "next/link";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/info",
    label: "Info",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const NavBar = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navContainer} ref={container}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link href="/">chris coutts</Link>
        </div>
        <div className={styles.navOpen} onClick={toggleMenu}>
          <p>menu</p>
        </div>
      </div>
      <div className={styles.navOverlay}>
        <div className={styles.overlayBar}>
          <div className={styles.logo}>
            <Link href="/">chris coutts</Link>
          </div>
        </div>
        <div className={styles.close} onClick={toggleMenu}>
          <p>close</p>
        </div>
        <div className={styles.closeIcon}>
          <p>&#x2715;</p>
        </div>
        <div className={styles.copy}>
          <div className={styles.menuLinks}>
            {links.map((link, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.itemHolder} onClick={toggleMenu}>
                  <Link href={link.path} className={styles.link}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.menuInfo}>
            <div className={styles.infoCol}>
              <Link href="/">X &#8599;</Link>
              <Link href="/">portfolio</Link>
              <Link href="/">github</Link>
              <Link href="/">linkedin</Link>
            </div>
            <div className={styles.infoCol}>
              <Link href="mailto:chris.dcoutts@gmail.com">email</Link>
            </div>
          </div>
        </div>
        <div className={styles.preview}>
          <p>view showreel</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
