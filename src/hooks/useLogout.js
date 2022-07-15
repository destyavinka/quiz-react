import { useState, useEffect } from "react";
import { projectAuth } from "../components/Firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // Signout the user
    try {
      await projectAuth.signOut();
      // Dispatch logout action
      dispatch({ type: "LOGOUT" });
      // Update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } 
    catch (err) {
      if (!isCancelled) {
          console.log(err.message);
          setError(err.message);
          setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
