import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {auth} from "../firebase";
import { useHistory } from "react-router-dom";

const SignUp = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    let history = useHistory();

    const signUp = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            history.push('/signin')
        }).catch(error => {
           console.log(error)
        });
    }

    return (
        <div className='container'>
            <h4>Sign Up</h4>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input id='email' type="email" className="validate" ref={emailRef}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input id="password" type="password" className="validate" ref={passwordRef}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <button onClick={signUp} id="signin" className='btn green'>Sign Up</button>
                    </div>
                </div>
            </form>
            <p>Already register? <Link to='/signin'>Sign In</Link></p>
        </div>
    );
}

export default SignUp