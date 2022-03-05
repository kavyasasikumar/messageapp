import SignIn from "./component/signIn"
import Chat from "./component/chat"
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "./firebases"

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
       {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
