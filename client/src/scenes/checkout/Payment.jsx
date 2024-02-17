import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Information
        </Typography>
        <TextField
          fullWidth
          label="Email"
          type="text"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          name='email'
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          type="text"
          value={values.phoneNumber}
          onBlur={handleBlur}
          onChange={handleChange}
          name='phoneNumber'
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
    </Box>
  )
}

export default Payment;