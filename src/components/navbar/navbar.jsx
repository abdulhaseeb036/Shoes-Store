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
  const [logo, setLogo] = useState();

  // const changeAvaitor = () => {
  //   `<div>
  //   <input onChange={${(e) => setLogo(e.target.files[0])}} required className={${styles.logo}} type="file" name="" id="chooseimg" accept="image/*"></input>
  //   <Avatar onClick={${changeAvaitor}} src={${logo}} className={${styles.logo}} />
  //   </div>`
  // } 
  console.log(logo)

  // const setlogopic = (event) => {
  //   var picture = event.target.files[0];
  //   var src     = URL.createObjectURL(picture);

  //   setLogo({
  //     pic: picture,
  //     src: src
  //   })
      // `<input onChange=${(e) => setLogo(e.target.files[0])} required className={${styles.logo}} type="file" name="" id="chooseimg" accept="image/*"></input>
      // <Avatar onClick={${setlogopic}} src={${logo}} className={${styles.logo}} />`
  // }

  // const renderPreview = () => {
  //   if(logo.src) {
  //     return (
  //       <Avatar onClick={setlogopic} src={logo} className={styles.logo} />
  //     );
  //   } else {
  //     return (
  //       <p>
  //         No Preview
  //       </p>
  //     );
  //   }
  // }



  
  return (
    <div className={styles.header}>
      <div className={styles.logonav}>
        {/* {click ? ( 
        <div>
        <input onChange={(e) => setLogo(e.target.files[0])} required className={styles.logo} type="file" name="" id="chooseimg" accept="image/*"></input>
          <Avatar src={logo} className={styles.logo} />
          </div>
        ) : ( */}
        <div className={styles.logocontainer}>
          <a href="#">
            <Avatar src={logo} className={styles.logo} />
          </a>
        </div> 
         {/* )} */}

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
          <CloseIcon className={styles.closeicon} />
        ) : (
          <MenuIcon className={styles.menuicon} />
        )}
      </div>
    </div>
  );
};

export default Navbar;