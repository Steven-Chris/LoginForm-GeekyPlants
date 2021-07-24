import React, { useState } from "react";
import FormHeader from "./FormHeader";

import classes from "./Form.module.css";
// import Fclasses from "./FormFooter.module.css";
import FormTitle from "./FormTitle";
const EmailField = () => {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const getMail = (e) => {
    setMail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    console.log(mail, password);
    setMail("");
    setPassword("");
  };

  return (
    <>
      <form action="submit" onSubmit={login}>
        <FormHeader />
        <FormTitle />
        <div className={classes.inputContainer}>
          <label htmlFor="username">ENTER YOUR USERNAME</label>
          <input
            type="text"
            id="username"
            value={mail}
            placeholder="e.g. thomasgosalves@gmail.com"
            onChange={getMail}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password">ENTER YOUR PASSWORD</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={getPassword}
          />
        </div>
        <div className={classes.checkContainer}>
          <input type="checkbox" className={classes.check} />
          <p>Keep me Logged in next time</p>
        </div>
        <div className={classes.footerContainer}>
          <p>Forgot password?</p>
          <button className={classes.btn}>
            <div>Login </div>
            <div className={classes.arrow}>→</div>
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailField;
