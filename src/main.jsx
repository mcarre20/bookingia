import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
import { SearchContextProvider } from "./Context/SeachContext";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SearchContextProvider>
          <AuthContextProvider>
            <CssBaseline />
            <App />
          </AuthContextProvider>
        </SearchContextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
