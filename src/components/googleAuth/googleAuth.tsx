
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { frontendRoutes } from '../../api/frontendRoutes';


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
        <Button type="button" sx={{ width: "100%", color: "white", gap: 7, display: "flex", justifyContent: "center", alignItems: "center" }} className="buttonSubmit" variant="contained" color="primary" onClick={handleGoogleAuth}>
            {isSignUp ? "Sign Up With Google" : "Login Up With Google"}
            <img src="/svgs/google.svg" alt="Google Logo" width={24} height={24} />
        </Button>
    )
}

export default GoogleAuth