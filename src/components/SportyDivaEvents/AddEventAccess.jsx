import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Auth";

function AddEventAccess() {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <div>
        <h4 align="center"><Link to="/createevent">+ ADD EVENT</Link></h4>
      </div>
    );
  };
  return (
    null
  );
}

export default AddEventAccess;
