import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            fontSize={20}
            mb="30px"
          >
            Clothes Shop
          </Typography>
          <div>
            Explore curated collections of fashion forward pieces for every occasion.
            Elevate your wardrobe with effortless sophistication, only a click away.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Carrers</Typography>
          <Typography mb="30px">Our Store</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">50th NW Blvd, Washington DC. </Typography>
          <Typography mb="30px">Email: clothes@shop.com</Typography>
          <Typography mb="30px">(+507) 123-1234</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
