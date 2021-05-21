import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";
const LogIn = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // Some fancy firebase Login shit
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err));
  };

  const register = (e) => {
    // Some fancy firebase register shit

    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // It successfully created a new user wiht email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>

      <motion.div className="login" >
        <Link to="/">
          <img
            className="loginLogo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          />
        </Link>
        <motion.div
          className="loginContainer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1>Sign In</h1>
          <form>
            <h4>e-mail</h4>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="loginSignInButton"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to Amazon's Clone conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="loginResgistraionButton" onClick={register}>
            Create an Amazon Account
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default LogIn;
