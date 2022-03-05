import React from "react";
import firebase from "firebase"
import {auth} from "../firebases"
import "../App.css"



function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
       <button className="signInBtn" style={{ padding: '30px',  fontWeight: '600' }}  onClick={signInWithGoogle}>signInWithGoogle</button>
       </div>
    )
}

export default SignIn