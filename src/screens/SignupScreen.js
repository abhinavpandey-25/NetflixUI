import React,{useRef} from 'react'
import './SignupScreen.css'
import {auth} from '../firebase'
function SignupScreen() {
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    const register=(e)=>{
        console.log("register")
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(emailRef.current.value,
        passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
           emailRef.current.value,
           passwordRef.current.value 
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="signupScreen">
            <form>
                <h1>SignIn</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button style={{cursor:'pointer'}} onClick={signIn} type="submit">SignIn</button>
                <h4><span className="signupScreen__gray">New To NetFlix ? </span>
                 <span className="signupScreen__link" onClick={register}>Sign Up Now.</span></h4>
            </form>
        </div>
    )
}
export default SignupScreen
