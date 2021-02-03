import React, { useState } from "react";
import Logo from '../../assests/profile.png';
import Avatar from '@material-ui/core/Avatar';
import styles from '../navbar/navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';

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
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">Shoes</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">My account</a>
          </li>
          <li className={styles.option  + " " + styles.mobileoption} onClick={closeMobileMenu}>
            <Link to="signin" >SIGN-IN</Link>
          </li>
          <li className={styles.option + " " + styles.mobileoption} onClick={closeMobileMenu}>
            <Link to="signup" className={styles.signup}>
              SIGN-UP
            </Link>
          </li>
        </ul>
      </div>
      <ul className={styles.signinup}>
        <li className={styles.signin} onClick={closeMobileMenu}>
          <Link to="signin">SIGN-IN</Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="signup" className={styles.signupbtn}>
            SIGN-UP
          </Link>
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