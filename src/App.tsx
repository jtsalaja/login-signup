import "./App.css";
import Homepage from "./Homepage";
import "../css/style.css";
import Authentication from "./authentication/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: auth.uid,
            username: auth.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);
  return (
    <div className="app">
      {user ? <Homepage /> : <Authentication />}
      {/*<Homepage />*/}
    </div>
  );
}

export default App;
