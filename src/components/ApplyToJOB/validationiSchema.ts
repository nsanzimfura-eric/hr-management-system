import * as Yup from "yup";

const phoneRegex = /^\+?[1-9]\d{1,14}$/;
export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Your Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number format")
    .required("Telephone number is required"),
  github: Yup.string().url("Invalid URL").optional(),
  web: Yup.string().url("Invalid URL").optional(),
  linkedin: Yup.string().url("Invalid URL").optional(),
  file: Yup.mixed().required("A file is required").nullable(),
});

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  github: "",
  web: "",
  linkedin: "",
  file: null,
};
