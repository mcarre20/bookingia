import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import HotelDetails from "./Pages/HotelDetails";
import Hotels from "./Pages/Hotels";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
