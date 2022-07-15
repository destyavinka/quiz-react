import { Button } from "@material-ui/core";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import styles from "./Navbar.module.css";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Pop Quiz</li>
        <li>
          {user && (
            <>
              <Button onClick={logout}>Logout</Button>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
