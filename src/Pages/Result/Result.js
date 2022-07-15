import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Result.css";

const Result = ({ name, score }) => {
  const { user } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
