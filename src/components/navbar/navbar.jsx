import React, { useState } from "react";
// import { ReactComponent as CloseMenu } from "../assets/x.svg";
// import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import Logo from '../../assests/profile.png';
import Avatar from '@material-ui/core/Avatar';
import styles from '../navbar/navbar.module.css';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import "./navbar.module.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className={styles.header}>
      <div className={styles.logonav}>
        <div className={styles.logocontainer}>
          <a href="#">
            {/* <img src={Logo} className="logo" /> */}
            <Avatar src={Logo} className={styles.logo} />
          </a>
        </div>

        <ul className={click ? styles.navoptions.active : styles.navoptions}>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">BLOG</a>
          </li>
          <li className={styles.option  + " " + styles.mobileoption} onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className={styles.option + " " + styles.mobileoption} onClick={closeMobileMenu}>
            <a href="" className={styles.signup}>
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles.signinup}>
        <li className={styles.signin} onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className={styles.signupbtn}>
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className={styles.mobilemenu + styles.mobileoption } onClick={handleClick}>
        {click ? (
          <CloseIcon className={styles.menuicon} />
        ) : (
          <MenuIcon className={styles.menuicon} />
        )}
      </div>
    </div>
  );
};

export default Navbar;