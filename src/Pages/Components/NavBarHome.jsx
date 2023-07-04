import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../firebase";
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

function NavBarHome({ displaySearch }) {
  const { userIsLogin } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const naviagte = useNavigate();

  //handlers
  const loginButtonHandler = () => {
    naviagte("/login");
  };

  const logoutButtonHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        dispatch({ type: "LOGOUT" });
        naviagte("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <Typography variant="h3">Bookingia</Typography>
            <Stack spacing={2} direction="row">
              {!userIsLogin && (
                <StyledButton variant="contained">Register</StyledButton>
              )}
              {!userIsLogin && (
                <StyledButton variant="contained" onClick={loginButtonHandler}>
                  Login
                </StyledButton>
              )}
              {userIsLogin && <Favorites />}
              {userIsLogin && (
                <StyledButton variant="contained" onClick={logoutButtonHandler}>
                  Logout
                </StyledButton>
              )}
            </Stack>
          </Stack>
          <Paper
            elevation={2}
            display={displaySearch ? "flex" : "none"}
            sx={{
              width: "100%",
              py: "10px",
              px: "10px",
              display: `${displaySearch ? "flex" : "none"}`,
              justifyContent: "space-between",
            }}
          >
            <TextField required label="Destination" size="small" />

            <Box>
              <DatePicker
                label="Check-in"
                slotProps={{ textField: { size: "small", width: "50%" } }}
              />
              <DatePicker
                label="Check-out"
                slotProps={{ textField: { size: "small" } }}
              />
            </Box>

            <Box>
              <TextField label="Adults" sx={{ width: 80 }} size="small" />
              <TextField label="Children" sx={{ width: 90 }} size="small" />
              <TextField label="Rooms" sx={{ width: 90 }} size="small" />
            </Box>
            <Button variant="contained">Search</Button>
          </Paper>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default NavBarHome;
