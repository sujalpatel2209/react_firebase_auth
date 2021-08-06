import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase";
import { useHistory } from "react-router-dom";


const SignIn = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    let history = useHistory();


    const signIn = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            history.push('/')
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='container'>
            <h4>Sign In</h4>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input ref={emailRef} id='email' type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input ref={passwordRef} id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <button id="signin" onClick={signIn} className='btn green'>Sign In</button>
                    </div>
                </div>
            </form>
            <p>Not yet register? <Link to='/signup'>Sign Up</Link></p>
        </div>
    );
}

export default SignIn