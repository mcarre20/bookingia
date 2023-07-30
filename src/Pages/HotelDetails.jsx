import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function HotelDetails() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        <Box>
          <Typography variant="h5">Hotel Name</Typography>
          <Typography>Hotel Adress</Typography>
          <Typography>3 Stars</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Image Gallery Placeholder</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Room Types</Typography>
          <Stack sx={{ mt: "2rem" }}>
            <Paper
              elevation={4}
              sx={{ padding: 3, display: "flex", flexDirection: "column" }}
            >
              <Typography>Room Type</Typography>
              <Typography sx={{ py: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  gap: 1,
                }}
              >
                <Typography>$150/night</Typography>
                <Button variant="contained">Book Room</Button>
              </Box>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default HotelDetails;
