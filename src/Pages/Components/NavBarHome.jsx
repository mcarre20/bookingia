import {
  AppBar,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { SearchContext } from "../../Context/SeachContext";
import { auth, db } from "../../firebase";
import { formatDate } from "../../helpers/helperFunctions";
import Favorites from "./Favorites";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#e0e0e0",
  color: "#212121",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  "@media all": {
    minHeight: 150,
  },
}));

function NavBarHome() {
  const navigate = useNavigate();
  const { userIsLogin, dispatch: authDispatch } = useContext(AuthContext);
  const {
    destination,
    checkin,
    checkout,
    numberOfAdults,
    numberOfRooms,
    dispatch: searchDispatch,
  } = useContext(SearchContext);
  const [destinationState, setDestination] = useState("");
  const [checkinDate, setCheckinDate] = useState(dayjs(checkin));
  const [checkoutDate, setCheckoutDate] = useState(dayjs(checkout));
  const [numberOfAdultsState, setNumberOfAdults] = useState(numberOfAdults);
  const [numberOfRoomsSate, setNumberOfRooms] = useState(numberOfRooms);
  const [hotelFav, setHotelFav] = useState([]);

  //handlers
  const loginButtonHandler = () => {
    navigate("/login");
  };
  const registerButtonHandler = () => {
    navigate("/register");
  };

  const logoutButtonHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        authDispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const destinationHandler = (e) => {
    const value = e.target.value;
    setDestination(value);
  };
  const checkinHandler = (newValue) => {
    const date = formatDate(newValue.$d);
    setCheckinDate(date);
  };
  const checkoutHandler = (newValue) => {
    const date = formatDate(newValue.$d);
    setCheckoutDate(date);
  };
  const numberOfAdultsHandler = (e) => {
    const value = e.target.value;
    if (value === "") {
      return;
    }
    setNumberOfAdults(Number(value));
  };
  const numberOfRoomsHandler = (e) => {
    const value = e.target.value;
    if (value === "") {
      return;
    }
    setNumberOfRooms(Number(value));
  };
  const searchHandler = () => {
    if (destinationState === "") {
      return;
    }
    searchDispatch({
      type: "new_search",
      payload: {
        destination: destinationState,
        checkin: checkinDate,
        checkout: checkoutDate,
        numberOfAdults: numberOfAdultsState,
        numberOfRooms: numberOfRoomsSate,
      },
    });
    navigate("/hotels");
  };
  // side effects

  //don't update destination is the smae
  useEffect(() => {
    if (destination.toLowerCase() != destinationState.toLowerCase()) {
      setDestination(destination);
    }
  }, [destination]);

  // load favorite hotels
  useEffect(() => {
    const user = auth.currentUser;

    const unsubFavHotel = onSnapshot(doc(db, "users", user.uid), (doc) => {
      const data = doc.data().favorites;
      setHotelFav(data);
    });
    return () => unsubFavHotel();
  }, []);

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <StyledToolbar disableGutters>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h3">Bookingia</Typography>
            </Link>
            <Stack spacing={2} direction="row">
              {!userIsLogin && (
                <StyledButton
                  variant="contained"
                  onClick={registerButtonHandler}
                >
                  Register
                </StyledButton>
              )}
              {!userIsLogin && (
                <StyledButton variant="contained" onClick={loginButtonHandler}>
                  Login
                </StyledButton>
              )}
              {userIsLogin && <Favorites hotels={hotelFav} />}
              {userIsLogin && (
                <StyledButton variant="contained" onClick={logoutButtonHandler}>
                  Logout
                </StyledButton>
              )}
            </Stack>
          </Stack>

          <Paper
            elevation={2}
            sx={{
              width: "100%",
              py: "15px",
              px: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              label="Destination"
              size="small"
              onChange={destinationHandler}
              value={destinationState}
            />

            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <DatePicker
                label="Check-in"
                slotProps={{ textField: { size: "small", width: "50%" } }}
                value={checkinDate}
                onChange={checkinHandler}
                disablePast
              />

              <DatePicker
                label="Check-out"
                slotProps={{ textField: { size: "small" } }}
                value={checkoutDate}
                onChange={checkoutHandler}
                disablePast
              />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                label="adults"
                sx={{ width: 90 }}
                size="small"
                value={numberOfAdultsState}
                onChange={numberOfAdultsHandler}
              />

              <TextField
                label="Rooms"
                sx={{ width: 90 }}
                size="small"
                value={numberOfRoomsSate}
                onChange={numberOfRoomsHandler}
              />
            </Stack>
            <Button variant="contained" onClick={searchHandler}>
              Search
            </Button>
          </Paper>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default NavBarHome;
