import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
    let history = useHistory();
    return (
        <nav className='black'>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    {props.user ? <li><Link onClick={() => auth.signOut().then(res => { history.push('/signin') })}>Logout</Link></li> : <li><Link to='/signin'>Sign In</Link></li>}

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;