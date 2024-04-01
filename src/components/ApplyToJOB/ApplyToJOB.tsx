/* eslint-disable */
import styles from './ApplyToJOB.module.scss';
import { TextField, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { initialValues, validationSchema } from './validationiSchema';
import { backendAPI } from '../../api/backendAPI';
import { useEffect, useRef, useState } from 'react';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import AlertComponent from '../AlertComponent/AlertComponent';
import ErrorComponent from '../errorComponent/ErrorComponent';
import useAddFormData from '../../hooks/useAddFormData';
import { DBJobInterface } from '../singleDBJob/singleDBJob';

interface ApplyToJOBProps {
    handleClose: () => void;
    job: DBJobInterface;
}

const ApplyToJOB = (props: ApplyToJOBProps) => {
    const { handleClose, job } = props;

    const { data, error, loading, formDataHandler } = useAddFormData();
    const [formReset, setFormReset] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !error && data) {
            //reset form;
            setFormReset('Application was sent successfully');
            setTimeout(() => { setFormReset(null); }, 2000);
            handleClose();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, error, data])


    const fileRef = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.applyToJOB} >
            <h2 className="title mb-5">Apply to Job: {job.title}</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // handleApplicationSubmit(values)
                    // post data 
                    console.log(values.file, 'values.file.file');
                    const formData = new FormData();

                    formData.append('email', values.email);
                    formData.append('phone', values.phone);
                    formData.append('name', values.name);
                    formData.append('web', values.web);
                    formData.append('linkedin', values.linkedin);
                    formData.append('github', values.github);
                    // @ts-ignore
                    formData.append('file', values.file);
                    //add data
                    void formDataHandler(backendAPI.applyToJob(job.id), formData);
                }}
            >
                {({ values, errors, handleChange, setFieldValue, handleSubmit, touched }) => {

                    return (
                        <Form autoComplete="off" className="form" onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <label htmlFor='name' >Full Name</label>
                                <TextField
                                    id="outlined-basic-name"
                                    name="name"
                                    label="FullName"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    value={values.name}
                                    error={errors.name && touched.name ? true : false}
                                />
                                {errors.name && touched.name && <ErrorComponent message={errors.name} />}
                            </div>
                            <div className="inputBox">
                                <label htmlFor='email' >Full Name</label>
                                <TextField
                                    id="outlined-basic-email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="johndoe@alight.com"
                                    value={values.email}
                                    error={errors.email && touched.email ? true : false}
                                />
                                {errors.email && touched.email && <ErrorComponent message={errors.email} />}
                            </div>
                            <div className="inputBox">
                                <label htmlFor='name' >Full Name</label>
                                <TextField
                                    id="outlined-basic-phone"
                                    name="phone"
                                    label="Phone"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="(+250)780088171"
                                    value={values.phone}
                                    error={errors.phone && touched.phone ? true : false}
                                />
                                {errors.phone && touched.phone && <ErrorComponent message={errors.phone} />}
                            </div>

                            <div className="inputBox">
                                <label htmlFor='name' >Upload your resume only in pdf</label>
                                <div onClick={() => fileRef.current?.click()} className='file'>
                                    <img src="/svgs/pdf.svg" alt="Pdf" width={20} height={20} />
                                    {values.file &&
                                        <span>
                                            {// @ts-ignore
                                                values.file.name}
                                        </span>
                                    }
                                </div>
                                <input
                                    type="file"
                                    ref={fileRef}
                                    hidden
                                    accept="application/pdf"
                                    onChange={(e: any) => {
                                        const file = e.target.files[0];

                                        if (file && file.type === "application/pdf") {
                                            setFieldValue('file', file);
                                        } else {
                                            alert("Please upload a PDF file.")
                                        }
                                    }} />
                                {errors.file && touched.file && <ErrorComponent message={errors.file} />}
                            </div>
                            <div className="inputBox">
                                <label htmlFor='name' >GitHub</label>
                                <TextField
                                    id="outlined-basic-github"
                                    name="github"
                                    label="GitHub"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="https://github.com****"
                                    value={values.github}
                                    error={errors.github && touched.github ? true : false}
                                />
                                {errors.github && touched.github && <ErrorComponent message={errors.github} />}
                            </div>
                            <div className="inputBox">
                                <label htmlFor='linkedin' >LinkedIn Profile</label>
                                <TextField
                                    id="outlined-basic-linkedin"
                                    name="linkedin"
                                    label="Linkedin"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="https://linkedin.com****"
                                    value={values.linkedin}
                                    error={errors.linkedin && touched.linkedin ? true : false}
                                />
                                {errors.linkedin && touched.linkedin && <ErrorComponent message={errors.linkedin} />}
                            </div>

                            <div className="inputBox">
                                <label htmlFor='web' >Your Portfolio website</label>
                                <TextField
                                    id="outlined-basic-web"
                                    name="web"
                                    label="Portfolio"
                                    variant="outlined"
                                    onChange={handleChange}
                                    placeholder="http(s)://***"
                                    value={values.web}
                                    error={errors.web && touched.web ? true : false}
                                />
                                {errors.web && touched.web && <ErrorComponent message={errors.web} />}
                            </div>
                            <div className='actions_responses d-flex flex-column' style={{ gap: 10 }}>
                                {error && !loading && <AlertComponent message={error} />}
                                {loading && <LoadingComponent />}
                                {formReset && <AlertComponent message={formReset} alertType="success" />}
                            </div>
                            <Button type="submit" sx={{ width: "100%", color: "white", }} disabled={loading} className="buttonSubmit" variant="contained">
                                Submit Application
                            </Button>

                        </Form>

                    )
                }
                }
            </Formik >
        </div>);
};

export default ApplyToJOB;
