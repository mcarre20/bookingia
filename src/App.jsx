import { Box, Paper, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarHome from "./Pages/Components/NavBarHome";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import Hotels from "./Pages/Hotels";
import Login from "./Pages/Login";

function App() {
  return (
    <Paper style={{ background: "#f5f5f5", minHeight: "100dvh" }}>
      <BrowserRouter>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Box
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
