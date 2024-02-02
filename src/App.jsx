import React, { useState } from "react";
import PropTypes from "prop-types";
import Home from "./Pages/Home";
import Greeting from "./Pages/Greeting";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      {userData ? (
        <Greeting userData={userData} />
      ) : (
        <Home onUserData={handleUserData} />
      )}
    </div>
  );
};

App.propTypes = {
  onUserData: PropTypes.func,
};

export default App;
