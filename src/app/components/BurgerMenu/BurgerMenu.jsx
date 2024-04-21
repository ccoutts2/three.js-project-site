// "use client";

// import styles from "./BurgerMenu.module.scss";
// import React, { useState, useRef } from "react";
// import Link from "next/link";

// const links = [
//   {
//     path: "/",
//     label: "Home",
//   },
//   {
//     path: "/info",
//     label: "Info",
//   },
//   {
//     path: "/contact",
//     label: "Contact",
//   },
// ];

// const BurgerMenu = () => {
//   const container = useRef();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={styles.menuContainer} ref={container}>
//       <div className={styles.menuBar}>
//         <div>
//           <Link href="/">chris coutts</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default BurgerMenu;
