import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          This is a sample add-in. Please open the console to see logs.
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
