import React from "react";
import SignOut from "./signOut";
import { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebases";
import SendMessage from "./sendMessage";
import "../App.css";

function Chat() {
  const scroll = useRef();
  const [chat, setChat] = useState([]);
  useEffect(() => {
    db.collection("message")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setChat(snapshot.docs.map((doc) => doc.data()));
        console.log(chat);
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {chat.map(({ text, photoURL, uid }, id) => (
          <div key={id}>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
