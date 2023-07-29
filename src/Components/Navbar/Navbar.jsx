import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
   //adding the states
   //useState digunakan untuk membuat status, default statusnya ialah false. ini digunakan untuk mengaktifkan kelas pada menu navigasi dan ikon hamburger saat diklik
   const [isActive, setIsActive] = useState(false);

   //add the active class
   //fungsi ini untuk membuat status menjadi true ketika ikon hamburger pertama kali diklik
   const toggleActiveClass = () => {
      setIsActive(!isActive);
   };

   //clean up function to remove the active class
   //fungsi untuk menyetel status variabel ke false saat salah satu tautan navigasi diklik
   const removeActive = () => {
      setIsActive(false);
   };

   console.log(isActive);
   return (
      <div>
         <header className='App-header'>
            <nav className={`${styles.navbar}`}>
               {/* logo */}
               <a href='#home' className={`${styles.logo}`}>
                  Dev
               </a>
               <ul
                  className={`${styles.navMenu} ${
                     isActive ? styles.active : ""
                  }`}
               >
                  <li onClick={removeActive}>
                     <a href='#home' className={`${styles.navLink}`}>
                        Home
                     </a>
                  </li>
                  <li onClick={removeActive}>
                     <a href='#home' className={`${styles.navLink}`}>
                        Catalog
                     </a>
                  </li>
                  <li onClick={removeActive}>
                     <a href='#home' className={`${styles.navLink}`}>
                        All products
                     </a>
                  </li>
                  <li onClick={removeActive}>
                     <a href='#home' className={`${styles.navLink}`}>
                        Contact
                     </a>
                  </li>
               </ul>

               <div
                  className={`${styles.hamburger} ${
                     isActive ? styles.active : ""
                  }`}
                  onClick={toggleActiveClass}
               >
                  <span className={`${styles.bar}`}></span>
                  <span className={`${styles.bar}`}></span>
                  <span className={`${styles.bar}`}></span>
               </div>
            </nav>
         </header>
      </div>
   );
};

export default Navbar;
