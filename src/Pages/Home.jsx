import { Box, Container, Grid, Typography } from "@mui/material";
import { collectionGroup, getDocs, query } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import CityCard from "./Components/CityCard";
import NavBarHome from "./Components/NavBarHome";

function Home() {
  const [cities, setCities] = useState([]);
  const [loading, setloading] = useState(true);
  /*
  useEffect(() => {
    /// fetch data from firestore
    const getData = async () => {
      const promisesWorldCities = [];
      const worldCitiesTemp = [];

      // Get World
      try {
        const queryAllCities = await getDocs(
          query(collectionGroup(db, "cities_list"))
        );

        queryAllCities.forEach((doc) => {
          const city = doc.data().city;
          promisesWorldCities.push(
            getDownloadURL(ref(storage, `Cities/${city}_300x300.jpg`))
              .then((url) => {
                worldCitiesTemp.push({
                  id: doc.id,
                  imageURL: url,
                  ...doc.data(),
                });
                return Promise.resolve({
                  id: doc.id,
                  imageURL: url,
                  ...doc.data(),
                });
              })
              .then(() => {
                return Promise.resolve("sucess");
              })
              .catch((err) => {
                console.log(err);
              })
          );
        });
        Promise.all(promisesWorldCities).then(() => {
          worldCitiesTemp.sort((a, b) => {
            let fa = a.city.toLowerCase(),
              fb = b.city.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
          setCities(worldCitiesTemp);
        });
      } catch (err) {
        console.log(err);
      }
      setloading(false);
    };
    getData();
  }, []);
  */
  return (
    <>
      {loading ? (
        <Typography>loading</Typography>
      ) : (
        <Container maxWidth="lg" sx={{ mt: "2rem" }}>
          <Box
            component="section"
            id="popular_destiantion_world"
            marginBottom={7}
          >
            <Box>
              <Typography variant="h4">Popular Destinations - World</Typography>
            </Box>
            <Grid container spacing={2} paddingY={2}>
              {cities.map((city) => {
                if (!city.region) {
                  return (
                    <Grid item key={city.id}>
                      <CityCard
                        key={city.id}
                        cityName={city.city}
                        imageURL={city.imageURL}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
          <Box
            component="section"
            id="popular_destiantion_africa"
            marginBottom={7}
          >
            <Box>
              <Typography variant="h4">
                Popular Destinations - Africa
              </Typography>
            </Box>
            <Grid container spacing={2} paddingY={2}>
              {cities.map((city) => {
                if (city.region === "africa") {
                  return (
                    <Grid item key={city.id}>
                      <CityCard
                        key={city.id}
                        cityName={city.city}
                        imageURL={city.imageURL}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
          <Box
            component="section"
            id="popular_destiantion_asia"
            marginBottom={7}
          >
            <Box>
              <Typography variant="h4">Popular Destinations - Asia</Typography>
            </Box>
            <Grid container spacing={2} paddingY={2}>
              {cities.map((city) => {
                if (city.region === "asia") {
                  return (
                    <Grid item key={city.id}>
                      <CityCard
                        key={city.id}
                        cityName={city.city}
                        imageURL={city.imageURL}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
          <Box
            component="section"
            id="popular_destiantion_europe"
            marginBottom={7}
          >
            <Box>
              <Typography variant="h4">
                Popular Destinations - Europe
              </Typography>
            </Box>
            <Grid container spacing={2} paddingY={2}>
              {cities.map((city) => {
                if (city.region === "europe") {
                  return (
                    <Grid item key={city.id}>
                      <CityCard
                        key={city.id}
                        cityName={city.city}
                        imageURL={city.imageURL}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
          <Box
            component="section"
            id="popular_destiantion_northamerica"
            marginBottom={7}
          >
            <Box>
              <Typography variant="h4">
                Popular Destinations - North America
              </Typography>
            </Box>
            <Grid container spacing={2} paddingY={2}>
              {cities.map((city) => {
                if (city.region === "north america") {
                  return (
                    <Grid item key={city.id}>
                      <CityCard
                        key={city.id}
                        cityName={city.city}
                        imageURL={city.imageURL}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
          <Box
            component="section"
            id="popular_destiantion_southamerica"
            marginBottom={7}
          >
            <Box>
              <Typography variant="h4">
                Popular Destinations - South America
              </Typography>
            </Box>
            <Grid container spacing={2} paddingY={2}>
              {cities.map((city) => {
                if (city.region === "south america") {
                  return (
                    <Grid item key={city.id}>
                      <CityCard
                        key={city.id}
                        cityName={city.city}
                        imageURL={city.imageURL}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Home;
