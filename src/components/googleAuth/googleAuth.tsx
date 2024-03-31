
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import { frontendRoutes } from '../../api/frontendRoutes';
import styles from "./googleAuth.module.scss";
// import usePostData from '../../hooks/usePostData';
// import { backendAPI } from '../../api/backendAPI';
// import { JwtPayload, jwtDecode } from "jwt-decode";

interface GoogleAuthInterface {
    setErrorAuth: React.Dispatch<React.SetStateAction<string>>;
    setUser: React.Dispatch<React.SetStateAction<any>>;

}
const GoogleAuth = (props: GoogleAuthInterface) => {
    console.log(props)
    const location = useLocation();
    const [isSignUp, setIsSignUp] = useState(false);
    //hooks
    // const { data, error, postHandler } = usePostData();

    //watch signUp routes
    useEffect(() => {
        if (location.pathname === frontendRoutes.signup) {
            setIsSignUp(true);
        } else {
            setIsSignUp(false);
        }
    }, [location.pathname]);

    const googleRefBtn = useRef<HTMLDivElement>(null);
    //click on google button
    const handleGoogleLoginClick = () => {
        googleRefBtn.current?.click()
    }

    // google auth ||| WE are using custom authentication for now

    // useEffect(() => {
    //     const scriptx = document.createElement("script");
    //     scriptx.id = "google-auth-script";
    //     scriptx.src = "https://accounts.google.com/gsi/client";
    //     document.body.appendChild(scriptx);

    //     /* global google */
    //     google.accounts.id.initialize({
    //         client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    //         callback: async (response: any) => {
    //             const { email } = jwtDecode<JwtPayload>(response.credential)
    //             const data = {
    //                 email: email,
    //                 password: 'googlePassword',
    //             }
    //             await postHandler(backendAPI.login, data);
    //         },
    //     })

    //     google.accounts.id.renderButton(document.getElementById('google-signin-button'), {
    //         theme: 'outline',
    //         size: 'large',
    //     })
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <div className={styles.authButton} id="loginWithGoogle" onClick={handleGoogleLoginClick} >
            {isSignUp ? "Sign Up With Google" : "Login Up With Google"}
            <img src="/svgs/google.svg" alt="Google Logo" width={24} height={24} />
            <div id="google-signin-button" hidden ref={googleRefBtn}></div>
        </div>
    )
}

export default GoogleAuth