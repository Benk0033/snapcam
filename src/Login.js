import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlice'
import { auth, provider } from "./firebase"
import './Login.css'
import ghost from './images/ghost.png'

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uuid,
            }))
        })
            .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={ghost} alt="" />
                <Button variant="outlined" onClick={signIn}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Login
