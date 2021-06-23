import * as Yup from 'yup';

export const validationSchema = {
  login: Yup.object({
    username: Yup.string()
      .min(1, "Must contain at least 1 character")
      .max(50, "Must contain not more than 50 characters")
      .required("Required"),
    password: Yup.string()
      .min(8, "Must contain at least 8 characters")
      .max(50, "Must contain not more than 50 characters")
      .required("Required")
  })
}
