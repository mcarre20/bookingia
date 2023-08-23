import { Box, Paper, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarHome from "./Pages/Components/NavBarHome";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import Hotels from "./Pages/Hotels";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Paper style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <BrowserRouter>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels/:destination" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Box
          component="footer"
          sx={{
            height: "50px",
            backgroundColor: "#00695c",
            padding: 3,
            marginTop: 3,
          }}
        >
          <Typography align="center" color="white">
            Marly Carre
          </Typography>
        </Box>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
