
import { useEffect, useRef, useState } from "react";
import styles from "./formAuth.module.scss";
import { TextField, Button, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";
import { loginValidationSchema, signUpValidationSchema, signUpInitialValues, loginInitialValues } from "./validationSchema";
import ErrorComponent from "../errorComponent/ErrorComponent";
import GoogleAuth from "../googleAuth/googleAuth";

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
    const [rememberUser, setRememberUser] = useState(false);
    const [validationShema, setValidationShema] = useState<any>(signUpValidationSchema);
    const [initialValues, setInitialValues] = useState<any>(signUpInitialValues);

    //watch signUp routes
    useEffect(() => {
        if (location.pathname === frontendRoutes.signup) {
            setIsSignUp(true);
            setValidationShema(signUpValidationSchema);
            setInitialValues(signUpInitialValues);
        } else {
            setIsSignUp(false);
            setValidationShema(loginValidationSchema);
            setInitialValues(loginInitialValues);
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

    const checkBoxRef = useRef<HTMLInputElement>(null);
    const handleClickCheckBox = () => {
        checkBoxRef.current?.click()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={(values: AuthInterface) => {
                if (isSignUp) {
                    handleFormSubmitSignUp(values)
                } else {
                    handleFormSubmitLogin(values)
                }
            }}
        >
            {({ values, errors, handleChange, handleSubmit, isSubmitting, touched }) => {
                // useEffect(() => {
                //     if ((data || loginData) && (!loading || !loginLoading)) {
                //         resetForm();
                //     }
                // }, [data, loginData, loading, loginLoading]);

                return (
                    <Form autoComplete="off" className={styles.formAuth} onSubmit={handleSubmit}>
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
                                    error={errors.firstName && touched.firstName ? true : false}
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
                                    error={errors.lastName && touched.lastName ? true : false}
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
                                error={errors.email && touched.email ? true : false}
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
                                error={errors.password && touched.password ? true : false}
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
                                    error={errors.confirmPass && touched.confirmPass ? true : false}
                                />
                                {errors.confirmPass && touched.confirmPass && <ErrorComponent message={errors.confirmPass} />}
                            </div>
                        }
                        {!isSignUp &&
                            <div className="inputBoxCheck d-flex justify-content-between align-items-center w-100 m-0 p-0">
                                <div className="checkBox d-flex align-items-center" onClick={handleClickCheckBox}>
                                    <div className={`checkBoxRemember ${rememberUser && "checked"}`} > <div className="bg-checked"></div></div>
                                    <input type="checkbox" name="remember" hidden ref={checkBoxRef} id="remember" checked={rememberUser} onChange={() => setRememberUser(prev => !prev)} />
                                    <Typography variant="subtitle2" className="text">Remember</Typography>
                                </div>
                                <Link to={frontendRoutes.forgotPassword}>
                                    <Typography variant="subtitle2" className="text">Forgot Password?</Typography>
                                </Link>
                            </div>
                        }
                        <GoogleAuth />
                        <Button type="submit" disabled={isSubmitting} sx={{ width: "100%", color: "white" }} className="buttonSubmit" variant="contained" color="warning">
                            {isSignUp ? "Sign Up" : "Login"}
                        </Button>
                    </Form>

                )
            }
            }
        </Formik >
    )
}

export default FormAuth