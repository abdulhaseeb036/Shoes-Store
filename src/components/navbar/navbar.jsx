import React, { useState,useContext } from "react";
import Avatar from '@material-ui/core/Avatar';
import styles from '../navbar/navbar.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import {UserContext} from '../api/contextapi'
import 'firebase/auth';

const Navbar = () => {
  const {user} = useContext(UserContext);

 if (user) {
  var {photoURL} = user 

 } 

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <div className={styles.logonav}>
        <div className={styles.logocontainer}>
          {/* <a href="#"> */}
            <Avatar src={photoURL} className={styles.logo} />
        </div> 

        <ul className={click ? styles.navoptions.active : styles.navoptions}>
          <li className={styles.option} onClick={closeMobileMenu}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <Link to='products'>Shoes</Link>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <Link to="profile">My account</Link>
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
          <CloseIcon className={styles.closeicon} />
        ) : (
          <MenuIcon className={styles.menuicon} />
        )}
      </div>
    </div>
  );
};

export default Navbar;