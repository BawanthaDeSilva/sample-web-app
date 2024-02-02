import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ userData }) => {
  const calculateAge = (birthdate) => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
  // Calculate age using the provided birthdate
  const age = calculateAge(userData.birthday);

  return (
    <div>
      <div>
        <h4>Greeting Page</h4>
        <p>Hi {userData.name}!</p>
        <p>Your Age is {age} in 2024.</p>
      </div>
    </div>
  );
};

Greeting.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
  }),
};

export default Greeting;
