"use client";

import styles from "./NavBar.module.scss";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const overlay = useRef();
  const linkHolders = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.set(linkHolders.current, { y: 75 });

        tl.current = gsap
          .timeline({ paused: true })
          .to(overlay.current, {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
          })
          .to(linkHolders.current, {
            y: 0,
            duration: 1.25,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          });
      });

      return () => ctx.revert();
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  console.log(isMenuOpen);

  return (
    <nav className={styles.menuContainer} ref={container}>
      <div className={styles.menuBar}>
        <div className={styles.menuLogo}>
          <Link href="/">chris coutts</Link>
        </div>
        <div className={styles.menuOpen} onClick={toggleMenu}>
          <p>menu</p>
        </div>
      </div>
      <div ref={overlay} className={styles.menuOverlay}>
        <div className={styles.menuOverlayBar}>
          <div className={styles.menuLogo}>
            <Link href="/">chris coutts</Link>
          </div>
          <div className={styles.menuClose} onClick={toggleMenu}>
            <p>close</p>
          </div>
        </div>

        <div className={styles.menuCloseIcon}>
          <p>&#x2715;</p>
        </div>
        <div className={styles.menuCopy}>
          <div className={styles.menuLinks}>
            {links.map((link, index) => (
              <div key={index} className={styles.menuLinkItem}>
                <div
                  ref={(el) => (linkHolders.current[index] = el)}
                  className={styles.menuLinkItemHolder}
                  onClick={toggleMenu}>
                  <Link href={link.path} className={styles.menuLink}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.menuInfo}>
            <div className={styles.menuInfoCol}>
              <Link href="/">X &#8599;</Link>
              <Link href="/">portfolio</Link>
              <Link href="/">github</Link>
              <Link href="/">linkedin</Link>
            </div>
            <div className={styles.menuInfoCol}>
              <Link href="mailto:chris.dcoutts@gmail.com">email</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
