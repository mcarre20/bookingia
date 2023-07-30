import { Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarHome from "./Pages/Components/NavBarHome";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import Hotels from "./Pages/Hotels";
import Login from "./Pages/Login";

function App() {
  return (
    <Paper style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <BrowserRouter>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
