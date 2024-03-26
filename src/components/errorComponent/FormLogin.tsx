
import { useEffect } from "react";
import styles from "./formLogin.module.scss";
import { TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';


// import { useNavigate } from "react-router-dom";
// import { frontendRoutes } from "../../api/frontendRoutes";

const FormLogin = () => {
    // const navigate = useNavigate()

    // useEffect(() => {

    // }, [])

    return (
        <div className={styles.formLogin}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
    )
}

export default FormLogin