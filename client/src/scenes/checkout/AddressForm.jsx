import { Box, TextField, useMediaQuery } from "@mui/material"
import { getIn } from "formik"

const AddressForm = ({
  type,
  value,
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
      />

    </Box>
  )
}

export default AddressForm