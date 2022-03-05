import React, { useState } from 'react'
import { db, auth } from '../firebases'
import firebase from "firebase/compat/app";
import "../App.css"


function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('chat').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button className="sendbtn" style={{ width: '18%', fontWeight: '550', margin: '0 5% 0 5%', maxWidth: '200px'}}  type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage