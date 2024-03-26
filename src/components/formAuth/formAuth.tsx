
import { useEffect, useState } from "react";
import styles from "./formAuth.module.scss";
import { TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";
import { loginValidationSchema, signUpValidationSchema, signUpInitialValues, loginInitialValues } from "./validationSchema";
import ErrorComponent from "../errorComponent/ErrorComponent";

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
            {({ values, errors, resetForm, handleChange, handleSubmit, isSubmitting, touched }) => {
                // useEffect(() => {
                //     if ((data || loginData) && (!loading || !loginLoading)) {
                //         resetForm();
                //     }
                // }, [data, loginData, loading, loginLoading]);

                return (
                    <Form autoComplete="off" className={styles.formAuth}>
                        {
                            isSignUp &&
                            <div className="inputBox">
                                <TextField
                                    id="outlined-basic"
                                    name="firstName"
                                    label="FirstName"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="FirstName"
                                    value={values.firstName}
                                    error={errors && touched.firstName}
                                />
                                {errors.firstName && touched.firstName && <ErrorComponent message={errors.firstName} />}
                            </div>
                        }
                        {
                            isSignUp &&
                            <div className="inputBox">
                                <TextField
                                    id="outlined-basic"
                                    name="lastName"
                                    label="LastName"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="LastName"
                                    value={values.lastName}
                                    error={errors && touched.lastName}
                                />
                                {errors.lastName && touched.lastName && <ErrorComponent message={errors.lastName} />}
                            </div>
                        }
                        <div className="inputBox">
                            <TextField
                                id="outlined-basic"
                                name="email"
                                label={isSignUp ? "Email" : "Username"}
                                variant="outlined"
                                onChange={handleChange}
                                placeholder={isSignUp ? "Email" : "Username"}
                                value={values.email}
                                error={errors && touched.email}
                            />
                            {errors.email && touched.email && <ErrorComponent message={errors.email} />}
                        </div>
                        <div className="inputBox">
                            <TextField
                                id="outlined-basic"
                                name="password"
                                label="Password"
                                variant="outlined"
                                onChange={handleChange}
                                placeholder="Password"
                                value={values.password}
                                error={errors && touched.password}
                            />
                            {errors.password && touched.password && <ErrorComponent message={errors.password} />}
                        </div>

                        {
                            isSignUp &&
                            <div className="inputBox">
                                <TextField
                                    id="outlined-basic"
                                    name="confirmPass"
                                    label="Confirm Password"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    value={values.confirmPass}
                                    error={errors && touched.confirmPass}
                                />
                                {errors.confirmPass && touched.confirmPass && <ErrorComponent message={errors.confirmPass} />}
                            </div>
                        }
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