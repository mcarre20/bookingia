import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import hotel from "../assets/hotel.jpg";
import NavBarHome from "./Components/NavBarHome";

function Hotels() {
  return (
    <>
      <NavBarHome />
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box
              bgcolor="secondary.light"
              padding={2}
              sx={{
                borderRadius: "10px",
                position: "sticky",
                alignSelf: "flex-start",
              }}
            >
              <Typography variant="h6">Search</Typography>
              <Box>
                <Typography>Destination</Typography>
                <Paper>
                  <TextField required label="Destination" size="small" />
                </Paper>
              </Box>
              <Box>
                <Typography>Date</Typography>
                <Paper>
                  <DatePicker
                    label="Check-in"
                    slotProps={{ textField: { size: "small", width: "50%" } }}
                  />
                  <DatePicker
                    label="Check-out"
                    slotProps={{ textField: { size: "small" } }}
                  />
                </Paper>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>Adults</Typography>
                  <TextField sx={{ width: 80 }} size="small" />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>Children</Typography>
                  <TextField sx={{ width: 80 }} size="small" />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>Rooms</Typography>
                  <TextField sx={{ width: 80 }} size="small" />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Stack spacing={4}>
              <Card sx={{ display: "flex", padding: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 300 }}
                  image={hotel}
                  alt="hotel picture"
                />

                <Box>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Hotel Name</Typography>
                      <Typography>3 Stars</Typography>
                    </Box>

                    <Box>
                      <Typography>Description</Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla fringilla sapien lacus. Nam urna lectus, auctor et
                        rhoncus eu, molestie tincidunt turpis. Sed finibus dolor
                        sit amet lorem aliquet feugiat. Fusce nec ullamcorper
                        ex. Praesent a rhoncus lectus. Suspendisse hendrerit mi
                        semper sodales elementum. Curabitur cursus, nunc a
                        blandit porta, augue metus pharetra eros, sed placerat
                        neque enim a dolor.
                      </Typography>
                    </Box>
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
                      <Button variant="contained">See Rooms</Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
              <Card sx={{ display: "flex", padding: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 300 }}
                  image={hotel}
                  alt="hotel picture"
                />

                <Box>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Hotel Name</Typography>
                      <Typography>3 Stars</Typography>
                    </Box>

                    <Box>
                      <Typography>Description</Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla fringilla sapien lacus. Nam urna lectus, auctor et
                        rhoncus eu, molestie tincidunt turpis. Sed finibus dolor
                        sit amet lorem aliquet feugiat. Fusce nec ullamcorper
                        ex. Praesent a rhoncus lectus. Suspendisse hendrerit mi
                        semper sodales elementum. Curabitur cursus, nunc a
                        blandit porta, augue metus pharetra eros, sed placerat
                        neque enim a dolor.
                      </Typography>
                    </Box>
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
                      <Button variant="contained">See Rooms</Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
              <Card sx={{ display: "flex", padding: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 300 }}
                  image={hotel}
                  alt="hotel picture"
                />

                <Box>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Hotel Name</Typography>
                      <Typography>3 Stars</Typography>
                    </Box>

                    <Box>
                      <Typography>Description</Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla fringilla sapien lacus. Nam urna lectus, auctor et
                        rhoncus eu, molestie tincidunt turpis. Sed finibus dolor
                        sit amet lorem aliquet feugiat. Fusce nec ullamcorper
                        ex. Praesent a rhoncus lectus. Suspendisse hendrerit mi
                        semper sodales elementum. Curabitur cursus, nunc a
                        blandit porta, augue metus pharetra eros, sed placerat
                        neque enim a dolor.
                      </Typography>
                    </Box>
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
                      <Button variant="contained">See Rooms</Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hotels;
