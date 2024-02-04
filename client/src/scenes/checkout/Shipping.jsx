import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"
import AddressForm from "./AddressForm"

const Shipping = (values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
) => {
  return (
    <Box>
      {/* BILLING FORM */}
      <Box>
        <Typography>
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          value={values.billingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb='20px'>
        <FormControlLabel
          label="Shipping Address is the same as Billing Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )}
            />
          }
        />
      </Box>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            value={values.shippingAddress}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  )
}