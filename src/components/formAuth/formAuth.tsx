
import { useEffect, useState } from "react";
import styles from "./formAuth.module.scss";
import { TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";
import { loginValidationSchema, signUpValidationSchema, signUpInitialValues, loginInitialValues } from "./validationSchema";
import { textFieldStyles } from "./textFieldCustomStyles";

export interface AuthInterface {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    confirmPass?: string;
}

const FormAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSignUp, setIsSignUp] = useState(false);

    //watch signUp routes
    useEffect(() => {
        if (location.pathname === frontendRoutes.signup) {
            setIsSignUp(true)
        } else {
            setIsSignUp(false)
        }
    }, [location.pathname]);


    const handleFormSubmitLogin = (values: AuthInterface) => {
        console.log(values, 'login');
        navigate(frontendRoutes.dashboard)
    }

    const handleFormSubmitSignUp = (values: AuthInterface) => {
        console.log(values, 'sign up')
        navigate(frontendRoutes.login)
    }

    return (
        <Formik
            initialValues={
                isSignUp
                    ? signUpInitialValues
                    : loginInitialValues
            }
            validationSchema={
                isSignUp ? signUpValidationSchema : loginValidationSchema
            }
            onSubmit={(values: AuthInterface) => {
                if (isSignUp) {
                    handleFormSubmitSignUp(values)
                } else {
                    handleFormSubmitLogin(values)
                }
            }}
        >
            {({ values, errors, resetForm, handleChange, handleSubmit, isSubmitting }) => {
                // useEffect(() => {
                //     if ((data || loginData) && (!loading || !loginLoading)) {
                //         resetForm();
                //     }
                // }, [data, loginData, loading, loginLoading]);

                return (
                    <Form autoComplete="off" className={styles.formAuth}>
                        <TextField
                            id="outlined-basic"
                            name="firstName"
                            sx={{
                                color: "#071C50", fontSize: "1rem",
                                input: {
                                    color: '#071C50',
                                    fontSize: "1rem",
                                    "&::placeholder": {
                                        fontSize: "1rem",
                                        color: '#071C50',
                                    },
                                },
                                label: { color: '#071C50' }
                            }}
                            label="FirstName"
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Button type="submit" disabled={isSubmitting} sx={{ width: "100%", color: "white" }} className="buttonSubmit" variant="contained" color="warning">
                            {isSignUp ? "Sign Up" : "Login"}
                        </Button>
                    </Form>

                )
            }
            }
        </Formik>
    )
}

export default FormAuth