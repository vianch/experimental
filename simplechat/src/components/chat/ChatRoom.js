import { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';

import { auth, firestore } from "../../libs/firebase";

// Components
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const getMessageQuery = messagesRef.orderBy("createdAt", "asc").limit(25);
  const [messages] = useCollectionData(getMessageQuery, { idField: "id" });
  const [messageValue, setMessageValue] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: messageValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL, 
      displayName,
    })

    setMessageValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((message, index) => (
            <ChatMessage key={`${index + 1}-message`} message={message} />
          ))}

          <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={messageValue}
          onChange={(event) => setMessageValue(event.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!messageValue}>💩</button>
      </form>
    </>
  );
};

export default ChatRoom;
