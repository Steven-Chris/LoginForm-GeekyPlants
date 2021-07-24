import React from "react";
import classes from "./PasswordField.module.css";
const PasswordField = () => {
  return (
    <div className={classes.inputContainer}>
      <label htmlFor="password">ENTER YOUR PASSWORD</label>
      <input type="password" id="password" placeholder="Password" />
    </div>
  );
};

export default PasswordField;
