
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { frontendRoutes } from '../../api/frontendRoutes';
import styles from "./googleAuth.module.scss"


const GoogleAuth = () => {
    const navigate = useNavigate();

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


    //google auth
    const handleGoogleAuth = () => {

    }

    return (
        <button type="button" className={styles.authButton} onClick={handleGoogleAuth}>
            {isSignUp ? "Sign Up With Google" : "Login Up With Google"}
            <img src="/svgs/google.svg" alt="Google Logo" width={24} height={24} />
        </button>
    )
}

export default GoogleAuth