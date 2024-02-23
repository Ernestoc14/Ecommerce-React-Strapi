import { Box, Alert, AlertTitle } from "@mui/material"

const Confirmation = () => {
    return(
      <Box>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your order has been successfully submitted!
          <strong>Congrats on making your purchase!</strong>
        </Alert>
      </Box>
    )
}

export default Confirmation;