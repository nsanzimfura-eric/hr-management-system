import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("FirstName is required"),
  lastName: Yup.string().required("LastName is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email/userName is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm Password Field is required"),
});

export const signUpInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
};
