import styles from "./Login.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <Link to="/home">Home</Link>
      <div className={styles.containerLogin}>
        <div className={styles.wrapLogin}>
          <form className={styles.loginForm}>
            <span className={styles.loginFormTitle}> Bem vindo </span>
            <span className={styles.loginFormTitle}></span>
            <div className={styles.wrapInput}>
              <input
                className={
                  email !== "" ? (className = "hasVal input") : "input"
                }
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span
                className={styles.focusInput}
                data-placeholder="Email"
              ></span>
            </div>

            <div className={styles.wrapInput}>
              <input
                className={password !== "" ? "hasVal input" : "input"}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span
                className={styles.focusInput}
                data-placeholder="Password"
              ></span>
            </div>

            <div className={styles.containerLoginFormBtn}>
              <button className={styles.loginFormBtn}>Login</button>
            </div>

            <div className={styles.textCenter}>
              <span className={styles.txt1}>
                <Link to="/cadastro">Não possui conta? Se inscreva aqui!</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
