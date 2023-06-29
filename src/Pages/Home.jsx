import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import north_america from "../DummyData/north_america.json";
import popular_destination from "../DummyData/popular_destination.json";
import CityCard from "./Components/CityCard";
import NavBarHome from "./Components/NavBarHome";

function Home() {
  const cityListGlb = popular_destination.cities;
  const cityListNa = north_america.cities;
  return (
    <>
      <NavBarHome />
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        <section id="popular_destiantion">
          <Box>
            <Typography variant="h4">Popular Destinations</Typography>
          </Box>
          <Grid container spacing={2} paddingY={2}>
            {cityListGlb.map((city) => {
              return (
                <Grid item>
                  <CityCard key={city.id} cityName={city.name} />
                </Grid>
              );
            })}
          </Grid>
        </section>
        <section id="north_america">
          <Box>
            <Typography variant="h4">North America</Typography>
          </Box>
          <Grid container spacing={2} paddingY={2}>
            {cityListNa.map((city) => {
              return (
                <Grid item>
                  <CityCard key={city.id} cityName={city.name} />
                </Grid>
              );
            })}
          </Grid>
        </section>
        <section id="south_america">
          <Box>
            <Typography variant="h4">South America</Typography>
          </Box>
          <Stack direction="row" spacing={4} paddingY={2}></Stack>
        </section>
        <section id="europe">
          <Box>
            <Typography variant="h4">Europe</Typography>
          </Box>
          <Stack direction="row" spacing={4} paddingY={2}></Stack>
        </section>
        <section id="Asia">
          <Box>
            <Typography variant="h4">Asia</Typography>
          </Box>
          <Stack direction="row" spacing={4} paddingY={2}></Stack>
        </section>
      </Container>
    </>
  );
}

export default Home;
