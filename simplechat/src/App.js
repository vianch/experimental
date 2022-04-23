import { useAuthState } from "react-firebase-hooks/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Libst
import { auth } from "./libs/firebase";

// Styles
import "./App.css";

// Components
import ChatRoom from "./components/chat/ChatRoom";
import SignIn from "./components/authentication/SignIn";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
