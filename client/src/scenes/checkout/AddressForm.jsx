import { Box, TextField, useMediaQuery } from "@mui/material"
import { getIn } from "formik"

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width;600px)");

  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(errors, formattedName(field)) &&
      getIn(touched, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(errors, formattedName(field)) &&
    getIn(touched, formattedName(field))

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
      }}
    >
      <TextField
        fullWidth
        label="First Name"
        type="text"
        value={values.firstName}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        label="Last Name"
        type="text"
        value={values.lastName}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        label="Country"
        type="text"
        value={values.country}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        label="Street Address"
        type="text"
        value={values.street1}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        label="Street Address 2 (Optional)"
        type="text"
        value={values.street2}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        label="City"
        type="text"
        value={values.city}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{ gridColumn: "1fr" }}
      />
      <TextField
        fullWidth
        label="State"
        type="text"
        value={values.state}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
        sx={{ gridColumn: "1fr" }}
      />
      <TextField
        fullWidth
        label="Zip Code"
        type="text"
        value={values.zip}
        onBlur={handleBlur}
        onChange={handleChange}
        name={formattedName("zip")}
        error={formattedError("zip")}
        helperText={formattedHelper("zip")}
        sx={{ gridColumn: "1fr" }}
      />
    </Box>
  )
}

export default AddressForm