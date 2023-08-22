import { Button, Menu, MenuItem, styled } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SeachContext";

const StyledButton = styled(Button)(({}) => ({
  background: "#e0e0e0",
  color: "#212121",
}));
function Favorites({ hotels = [] }) {
  //route
  const navigate = useNavigate();
  //state
  const [anchorEL, setAnchorEL] = useState(null);
  const open = Boolean(anchorEL);

  //context
  const {
    checkin,
    checkout,
    numberOfAdults,
    numberOfRooms,
    dispatch: searchDispatch,
  } = useContext(SearchContext);

  //handler
  const favButtonHandler = (e) => {
    setAnchorEL(e.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEL(null);
  };
  const favHotelHandler = (cityName, hotelID) => {
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

    navigate(`/hotel/${hotelID}`);
  };

  return (
    <>
      <StyledButton
        id="favorites-button"
        aria-controls={open ? "favorites-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={favButtonHandler}
        variant="contained"
      >
        Favorites
      </StyledButton>
      <Menu
        id="favorites-menu"
        anchorEl={anchorEL}
        open={open}
        onClose={closeHandler}
        MenuListProps={{ "aria-labelledby": "favorites-button" }}
        sx={{ marginTop: 1 }}
      >
        {hotels.length < 1 ? (
          <MenuItem>No Hotels added</MenuItem>
        ) : (
          hotels.map((hotel) => (
            <MenuItem
              key={hotel.id}
              onClick={() => favHotelHandler(hotel.cityName, hotel.id)}
            >
              {hotel.hotelName}
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
}

export default Favorites;
