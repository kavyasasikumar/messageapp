import React from "react";
import { auth } from "../firebases";
import "../App.css";

function SignOut() {
  return (
    <div
      className="outdiv"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
     
        top: 0,
        zIndex: "10",
      }}
    >
      <button
        className="outbtn"
        style={{
          marginTop: "1%",
          fontWeight: "600",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
