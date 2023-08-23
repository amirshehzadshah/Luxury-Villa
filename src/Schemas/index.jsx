import * as Yup from "yup";

export const orderSchema = Yup.object({
  emailAddress: Yup.string().email().required("Please enter your email")
});