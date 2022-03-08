import React from "react";

import 'firebase/auth';
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase-config";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const UserProfile = (props) => {
  
  
  const auth = getAuth();
const admin = auth.currentUser;
  console.log("Hey")
  console.log(admin);
  

  if (admin) {
    return (
      <Link to="/Profile" style={{ color: "Black" }}>

        <Button >
          <Avatar style={{ background: "lightblue", width: '30px',
    height: '30px'}}>
{
  admin.email.substring(0,1)
}

          </Avatar>
        </Button>
      </Link>
    );
  } else if (!admin) {
    return (
      <Link to="/Login" style={{ color: "Black" }}>
        Log In
      </Link>
    );
    }
};

export default UserProfile;