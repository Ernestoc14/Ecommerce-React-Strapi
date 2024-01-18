import { useSelector } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material"
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from "yup"
import { shades } from '../../theme';


const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    const cart = useSelector((state) => state.cart.cart)
    const isFirstStep = activeStep === 0
    const isSecondStep = activeStep === 1

    const handleFormSubmit = async(value, actions) => {
        setActiveStep(activeStep + 1)
    }

    async function makePayment(values) {

    }
    return <Box>
        <Stepper activeStep={activeStep} sx={{ m: "20px 0"}}>
            <Step>
                <StepLabel>Billing</StepLabel>
            </Step>
            <Step>
                <StepLabel>Payment</StepLabel>
            </Step>
        </Stepper>
        <Box>
            
        </Box>
    </Box>
}
export default Checkout;

// 2 hr 53 min