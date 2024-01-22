import classes from "./Button.module.css";
const Button = () => {
  return (
    <button className={classes["profile-button"]}>
      <a href="https://drive.google.com/file/d/199ZvaCTOHRsh-s0rnJSBgrncGxllAPfF/view?usp=sharing">
        Company profile
      </a>
    </button>
  );
};
export default Button;
