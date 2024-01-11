import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('')

  return(
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography variant="subtitle1">Get the latest news on our products.</Typography>
    </Box>
  )
}