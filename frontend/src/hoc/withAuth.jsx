import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const withAuth = (
  WrappedComponent
) => {

  return (props) => {

    const { user } =
      useContext(AuthContext);

    if (!user) {
      return <Navigate to="/" />;
    }

    return (
      <WrappedComponent
        {...props}
      />
    );
  };
};

export default withAuth;