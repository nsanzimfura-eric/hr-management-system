
import { useEffect, useRef, useState } from "react";
import styles from "./formAuth.module.scss";
import { TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { frontendRoutes } from "../../api/frontendRoutes";
import { loginValidationSchema, signUpValidationSchema, signUpInitialValues, loginInitialValues } from "./validationSchema";
import ErrorComponent from "../errorComponent/ErrorComponent";
import GoogleAuth from "../googleAuth/googleAuth";
import AlertComponent from "../AlertComponent/AlertComponent";
import usePostData from "../../hooks/usePostData";
import { backendAPI } from "../../api/backendAPI";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

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
    const [showPassword, setShowPassword] = useState(false);
    const [formReset, setFormReset] = useState(false);
    const [validationShema, setValidationShema] = useState<any>(signUpValidationSchema);
    const [initialValues, setInitialValues] = useState<any>(signUpInitialValues);

    //custom hooks
    const { data, error, loading, postHandler } = usePostData();

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

    //redirect user after auth
    useEffect(() => {
        if (!loading && !error && data) {
            //reset form;
            setFormReset(true);
            setTimeout(() => { setFormReset(false); }, 500);

            if (isSignUp) {
                navigate(frontendRoutes.login);

            } else {
                //save token
                localStorage.setItem('token', data.data?.token as string);
                localStorage.setItem('userProfile', JSON.stringify(data.data));
                navigate(frontendRoutes.dashboard);
            }
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, error, data])

    const checkBoxRef = useRef<HTMLInputElement>(null);
    const handleClickCheckBox = () => {
        checkBoxRef.current?.click()
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={async (values: AuthInterface) => {
                if (isSignUp) {
                    //signUp
                    await postHandler(backendAPI.signup, values)
                } else {
                    //login
                    await postHandler(backendAPI.login, values);
                }
            }}
        >
            {({ values, errors, handleChange, resetForm, handleSubmit, isSubmitting, touched }) => {
                if (formReset) {
                    resetForm();
                }

                return (
                    <Form autoComplete="off" className={styles.formAuth} onSubmit={handleSubmit}>
                        {error && <AlertComponent message={error} />}
                        {loading && <LoadingComponent />}

                        {
                            isSignUp &&
                            <div className="inputBox">
                                <TextField
                                    id="outlined-basic-firstName"
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
                                    id="outlined-basic-lastName"
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
                                id="outlined-basic-email"
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
                                id="outlined-basic-password"
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                onChange={handleChange}
                                placeholder="Password"
                                value={values.password}
                                error={errors.password && touched.password ? true : false}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={togglePasswordVisibility}
                                                edge="end"
                                            >
                                                <img src={`/svgs/${showPassword ? "eye" : "blind"}.svg`} alt="Icon" style={{ width: 22, height: 19 }} className="img-fluid" />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {errors.password && touched.password && <ErrorComponent message={errors.password} />}
                        </div>

                        {
                            isSignUp &&
                            <div className="inputBox">
                                <TextField
                                    id="outlined-basic-confirmPass"
                                    name="confirmPass"
                                    label="Re-enter Password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleChange}
                                    placeholder="Re-enter Password"
                                    value={values.confirmPass}
                                    error={errors.confirmPass && touched.confirmPass ? true : false}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={togglePasswordVisibility}
                                                    edge="end"
                                                >
                                                    <img src={`/svgs/${showPassword ? "eye" : "blind"}.svg`} alt="Icon" style={{ width: 22, height: 19 }} className="img-fluid" />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
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
                        <Button type="submit" disabled={isSubmitting} sx={{ width: "100%", color: "white", }} className="buttonSubmit" variant="contained" color="warning">
                            {isSignUp ? "Sign Up" : "Login"}
                        </Button>
                        {/*  GOOOGLE AUTHENTICATION */}
                        <GoogleAuth />
                    </Form>

                )
            }
            }
        </Formik >
    )
}

export default FormAuth