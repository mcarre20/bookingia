import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SeachContext";
import { capitalizeFirstWord } from "../../helpers/helperFunctions";

function CityCard({ cityName, imageURL }) {
  const navigate = useNavigate();
  const {
    checkin,
    checkout,
    numberOfAdults,
    numberOfRooms,
    dispatch: searchDispatch,
  } = useContext(SearchContext);

  const onClickHandler = () => {
    searchDispatch({
      type: "new_search",
      payload: {
        destination: cityName,
        checkin,
        checkout,
        numberOfAdults,
        numberOfRooms,
      },
    });
    navigate(`/hotels/${cityName}`);
  };
  return (
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
      onClick={onClickHandler}
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
  );
}

export default CityCard;
