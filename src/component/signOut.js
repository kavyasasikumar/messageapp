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
        width: "100%",
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
