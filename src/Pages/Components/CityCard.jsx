import { Box, Typography } from "@mui/material";
import Bangkok from "../../assets/Bangkok.jpg";
function HotelCard({ cityName }) {
  return (
    <Box
      borderRadius="10px"
      sx={{
        backgroundColor: "gray",
        background: `url(${Bangkok})`,
        backgroundSize: "cover",
        width: "150px",
        aspectRatio: "4/3",
        cursor: "pointer",
      }}
    >
      <Box
        borderRadius="10px 10px 0px 0px"
        padding={1}
        sx={{ backgroundColor: "black", opacity: "0.6" }}
      >
        <Typography
          variant="subtitle"
          color="#fff"
          sx={{ fontWeight: "bold", cursor: "defualt" }}
        >
          {cityName}
        </Typography>
      </Box>
    </Box>
  );
}

export default HotelCard;
