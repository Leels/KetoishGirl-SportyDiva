import React, { useContext } from "react";
import { AuthContext } from "../../Auth";

const buttonWidth = {
  width: "175px"
}

export function EditButton(){

  const {currentUser} = useContext(AuthContext);

  if (currentUser) {
  return  (
    <div>
      <button style={buttonWidth} className="btn btn-success">Edit</button>
    </div>
    );
  };
  return (
    null
  );
};

export function DeleteButton(){

    const {currentUser} = useContext(AuthContext);
  
    if (currentUser) {
    return  (
      <div>
        <button style={buttonWidth} className="btn btn-danger">Delete</button>
      </div>
      );
    };
    return (
      null
    );
  };
  
  