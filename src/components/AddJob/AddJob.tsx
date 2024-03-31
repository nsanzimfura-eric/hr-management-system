import usePostData from '../../hooks/usePostData';
import styles from './AddJob.module.scss';
import { TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { initialValues, validationSchema } from './validationiSchema';
import { backendAPI } from '../../api/backendAPI';
import { useEffect, useState } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import AlertComponent from '../AlertComponent/AlertComponent';
import ErrorComponent from '../errorComponent/ErrorComponent';
import { Calendar } from "react-date-range";


const AddJob = () => {
    const { data, error, loading, postHandler } = usePostData();
    const [formReset, setFormReset] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !error && data) {
            //reset form;
            setFormReset('Job Created successfully');
            setTimeout(() => { setFormReset(null); }, 2000);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, error, data])

    return (
        <div className={styles.addJob} >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    void postHandler(backendAPI.createJob, values)
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
                            {formReset && <AlertComponent message={formReset} alertType="success" />}
                            <div className="inputBox">
                                <TextField
                                    id="outlined-basic-title"
                                    name="title"
                                    label="Title"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="Title"
                                    value={values.title}
                                    error={errors.title && touched.title ? true : false}
                                />
                                {errors.title && touched.title && <ErrorComponent message={errors.title} />}
                            </div>
                            <div className="inputBox">
                                <label htmlFor="date">Igihe Gisigaye</label>
                                <Calendar date={date} onChange={onChange} />
                                {errors.title && touched.title && <ErrorComponent message={errors.title} />}
                            </div>
                            <Button type="submit" disabled={isSubmitting} sx={{ width: "100%", color: "white", }} className="buttonSubmit" variant="contained" color="warning">
                                Create Job
                            </Button>
                        </Form>

                    )
                }
                }
            </Formik >
        </div>
    );
};

export default AddJob;