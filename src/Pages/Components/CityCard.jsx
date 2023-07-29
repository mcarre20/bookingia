import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { capitalizeFirstWord } from "../../helpers/helperFunctions";

function HotelCard({ cityName, imageURL }) {
  return (
    <Link
      to={`/hotels/${cityName}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        borderRadius="10px"
        sx={{
          backgroundColor: "gray",
          background: `url(${imageURL})`,
          backgroundSize: "cover",
          width: "217px",
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
            {capitalizeFirstWord(cityName)}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default HotelCard;
