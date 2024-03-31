import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Job Title is required"),
  deadline: Yup.date().required("Application deadline is required"),
  description: Yup.string()
    .min(50, "Describe your job details in more than 50 characters")
    .required("Job Description is required"),
});

export const initialValues = {
  title: "",
  deadline: "",
  description: "",
};
