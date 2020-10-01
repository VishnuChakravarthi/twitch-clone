import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ signIn, signOut, signedIn }) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "716697229150-idpava8ss43g4ul9ulmm4r8jl6nq0.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  });

  const onAuthChange = (isSignedIn) => {
    // console.log(isSignedIn);
    if (isSignedIn) {
      signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderedUser = () => {
    // console.log(signedIn);
    if (signedIn === null) {
      return null;
    } else if (signedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignInClick}>
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  };

  return <div>{renderedUser()}</div>;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { signedIn: state.googleauth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
