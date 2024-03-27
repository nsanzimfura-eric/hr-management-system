
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { frontendRoutes } from '../../api/frontendRoutes';
import styles from "./googleAuth.module.scss";
// import { jwtDecode } from "jwt-decode";

interface GoogleAuthInterface {
    setErrorAuth: React.Dispatch<React.SetStateAction<string>>;
    setUser: React.Dispatch<React.SetStateAction<any>>;

}
const GoogleAuth = (props: GoogleAuthInterface) => {
    console.log(props)
    // const { setErrorAuth, setUser } = props;

    const location = useLocation();
    const [isSignUp, setIsSignUp] = useState(false);

    //watch signUp routes
    useEffect(() => {
        if (location.pathname === frontendRoutes.signup) {
            setIsSignUp(true);
        } else {
            setIsSignUp(false);
        }
    }, [location.pathname]);


    // const handleCallBackResponse = (response: any) => {
    //     console.log(response.credential, "-------------------");
    //     const user = jwtDecode(response.credential)
    // }
    //google auth
    // useEffect(() => {

    //     //global google
    //     google.accounts.id.initialize({
    //         client_id: import.meta.env.REACT_APP_GOOGLE_CLIENT_ID,
    //         callback: handleCallBackResponse
    //     })

    //     google.accounts.id.renderButton(
    //         document.getElementById("loginWithGoogle"),
    //         { them: '', size: 'small' }
    //     )

    // }, [])


    return (
        <div className={styles.authButton} id="loginWithGoogle">
            {isSignUp ? "Sign Up With Google" : "Login Up With Google"}
            <img src="/svgs/google.svg" alt="Google Logo" width={24} height={24} />
        </div>
    )
}

export default GoogleAuth