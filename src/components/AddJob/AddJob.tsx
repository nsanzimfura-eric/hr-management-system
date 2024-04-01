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
import QuilMaker from '../QuilMaker/QuilMaker';

interface AddJobProps {
    handleClose: () => void;
}

const AddJob = (props: AddJobProps) => {
    const { handleClose } = props;

    const { data, error, loading, postHandler } = usePostData();
    const [formReset, setFormReset] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !error && data) {
            //reset form;
            setFormReset('Job Created successfully');
            setTimeout(() => { setFormReset(null); }, 2000);
            console.log(data, 'job created successfully');
            handleClose();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, error, data])

    return (
        <div className={styles.addJob} >
            <h2 className="title mb-5">Create A New Job</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    void postHandler(backendAPI.createJob, values)
                }}
            >
                {({ values, errors, handleChange, setFieldValue, handleSubmit, isSubmitting, touched }) => {

                    return (
                        <Form autoComplete="off" className="form" onSubmit={handleSubmit}>

                            <div className="inputBox">
                                <label htmlFor='title' >Job Title</label>
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
                                <label >Application Deadline</label>
                                <Calendar
                                    date={new Date(values.deadline)}
                                    onChange={(date) => {
                                        void setFieldValue('deadline', date.toString());
                                    }}
                                />
                                {errors.deadline && touched.deadline && <ErrorComponent message={String(errors.deadline)} />}
                            </div>
                            <div className="inputBox">
                                <label >Application Deadline</label>
                                <QuilMaker
                                    id="outlined-basic-description"
                                    onChange={(value: string) => setFieldValue('description', value)}
                                    placeholder="Job Description"
                                    value={values.description}
                                />
                                {errors.description && touched.description && <ErrorComponent message={errors.description} />}
                            </div>
                            <Button type="submit" disabled={isSubmitting} sx={{ width: "100%", color: "white", }} className="buttonSubmit" variant="contained">
                                Create Job
                            </Button>
                            {error && <AlertComponent message={error} />}
                            {loading && <LoadingComponent />}
                            {formReset && <AlertComponent message={formReset} alertType="success" />}
                        </Form>

                    )
                }
                }
            </Formik >
        </div>
    );
};

export default AddJob;