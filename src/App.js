import './App.css';
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Home from "./components/Home";
import {auth} from "./firebase";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState(null);
    let history = useHistory();
    useEffect(() => {
       const isLogin = auth.onAuthStateChanged(user => {
           if (user) {
               setUser(user)
               history.push('/')
           } else {
               setUser(null)
           }
       })
        return isLogin;
    }, []);
    return (
        <div className="App">
            <Router>
                <Navbar user={user}/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/signin'>
                        <SignIn/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
