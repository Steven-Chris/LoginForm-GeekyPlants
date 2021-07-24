import React from "react";
import classes from "./EmailField.module.css";
const EmailField = () => {
  return (
    <div className={classes.inputContainer}>
      <label htmlFor="username">ENTER YOUR USERNAME</label>
      <input type="text" id="username" placeholder="e.g. thomasgosalves" />
    </div>
  );
};

export default EmailField;
