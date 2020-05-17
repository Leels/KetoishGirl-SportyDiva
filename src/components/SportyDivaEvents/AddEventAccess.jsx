import React, { useContext } from "react";
import firebase, { app } from '../../Firebase';
import {Link} from 'react-router-dom';
import { AuthContext } from "../../Auth";



function AddEventAccess(){

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
  return  (
    <div>
    <h4 align="center"><Link to="/createevent">+ Add Event</Link></h4>
    </div>
  );
  }
  return (
    <div >
  </div>
  );
}

export default AddEventAccess;
