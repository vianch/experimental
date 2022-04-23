import { auth } from "../../libs/firebase";

function ChatMessage({ message }) {
  const {text, displayName, createdAt, photoURL, uid} = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`chat-message ${messageClass}`}>
      <div className="chat-message-content">
        <div className="chat-message-content-text">
          <img alt="avatar" height={63} src={photoURL || 'https://pbs.twimg.com/profile_images/1494164843603152899/WYW33Wwo_400x400.jpg'} /> 
          
          <div className="chat-message-content-meta">
            <div className="chat-message-content-meta-user">
              {displayName || "Anonymous"}
            </div>

            <div className="chat-message-content-meta-time">
              {createdAt?.toDate().toDateString() || "Unknown"}
            </div>

            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
