import { Button } from "@material-ui/core";
import { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import { Link, Redirect } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>Please Login</h2>
      { error && <p>{ error } </p> }
      <label>
        <span>Email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <p>Don't have an account? <Link to="/signup">Register</Link></p>
      {!isPending && <Button type="submit" color="primary" variant="outlined">Login</Button> }
      {isPending && <Button disabled variant="outlined" color="primary">Loading</Button>}
    </form>
  );
}

export default Login;
