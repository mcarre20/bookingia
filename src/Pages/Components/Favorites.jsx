import { Button, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#e0e0e0",
  color: "#212121",
}));
function Favorites() {
  const [anchorEL, setAnchorEL] = useState(null);
  const open = Boolean(anchorEL);
  const clickHandler = (e) => {
    setAnchorEL(e.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEL(null);
  };
  return (
    <>
      <StyledButton
        id="favorites-button"
        aria-controls={open ? "favorites-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={clickHandler}
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
      >
        <MenuItem>Hotel 1</MenuItem>
        <MenuItem>Hotel 2</MenuItem>
        <MenuItem>Hotel 3</MenuItem>
        <MenuItem>Hotel 4</MenuItem>
      </Menu>
    </>
  );
}

export default Favorites;
