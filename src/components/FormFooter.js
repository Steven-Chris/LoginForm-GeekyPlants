import React from "react";
import classes from "./FormFooter.module.css";
const FormFooter = () => {
  const login = () => {
    console.log("Login was clicked");
  };
  return (
    <div className={classes.footerContainer}>
      <p>Forgot password?</p>
      <button className={classes.btn} onClick={login}>
        <div>Login </div>
        <div className={classes.arrow}>→</div>
      </button>
    </div>
  );
};

export default FormFooter;
