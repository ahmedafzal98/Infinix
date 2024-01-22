import logo from "../assets/images/logo.svg";
import Button from "./Button";
import Footer from "./Footer";
import classes from "./Header.module.css";
import Loader from "./Loader";
const Header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <h2 className={classes.heading}>Website</h2>
      <h3 className={classes["under-construction-text"]}>UNDER CONSTRUCTION</h3>
      <Loader />
      <Footer />
      <Button />
    </div>
  );
};

export default Header;
