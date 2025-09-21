import React from "react";
import { Navigate, NavLink } from "react-router";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div className="flex gap-2 justify-center">
        <NavLink to="/login">
          <button className="btn btn-primary">Login</button>
        </NavLink>

        <button className="btn btn-primary">Signup</button>
      </div>
    </div>
  );
};

export default HomePage;
