import { useSelector } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material"
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from "yup"
import { shades } from '../../theme';

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: ""
}

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
  }),
  // 3 HR
]

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0)
  const cart = useSelector((state) => state.cart.cart)
  const isFirstStep = activeStep === 0
  const isSecondStep = activeStep === 1

  const handleFormSubmit = async (value, actions) => {
    setActiveStep(activeStep + 1)
  }

  async function makePayment(values) {

  }
  return <Box>
    <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
      <Step>
        <StepLabel>Billing</StepLabel>
      </Step>
      <Step>
        <StepLabel>Payment</StepLabel>
      </Step>
    </Stepper>
    <Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      ></Formik>
    </Box>
  </Box>
}
export default Checkout;
