import React from "react";
import EmailField from "./EmailField";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import FormTitle from "./FormTitle";
import classes from "./Left.module.css";
import PasswordField from "./PasswordField";
const Left = () => {
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <FormHeader />
        <FormTitle />
        <EmailField />
        <PasswordField />
        <div className={classes.checkContainer}>
          <input type="checkbox" className={classes.check} />
          <p>Keep me Logged in next time</p>
        </div>
        <FormFooter />
      </div>
    </div>
  );
};

export default Left;
