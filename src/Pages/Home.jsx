import React, { useState } from "react";
import PropTypes from "prop-types";

const Home = ({ onUserData }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError("Name cannot be empty");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Name cannot contain numbers or symbols");
      return;
    }

    setNameError("");

    const userData = {
      name,
      birthday,
    };
    onUserData(userData);
  };

  return (
    <div className="signup">
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h1>WELCOME</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);

                    setNameError("");
                  }}
                />
              </label>
              <br />
              {nameError && <div style={{ color: "red" }}>{nameError}</div>}
            </div>
            <div class="mb-3">
              <label>
                Birthday:
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </label>
            </div>
            <br />
            <button type="submit" class="btn btn-success w-100 rounded-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  onUserData: PropTypes.func,
};

export default Home;
