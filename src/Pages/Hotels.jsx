import { Alert, Box, Container, Pagination, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../Context/SeachContext";
import DataLoading from "./Components/DataLoading";
import HotelCard from "./Components/HotelCard";

function Hotels() {
  const { checkin, checkout, numberOfAdults, numberOfRooms } =
    useContext(SearchContext);
  const { destination } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [hotelsList, setHotelsList] = useState([]);
  const [page, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const pageChangeHandler = (e, value) => {
    setPageNumber(value);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://gethotels-xa4qpi447a-uc.a.run.app?city=${destination}&rooms=${numberOfRooms}&adults=${numberOfAdults}&checkin=${checkin}&checkout=${checkout}&page_number=${page}`
        );
        const hotelData = await res.json();

        setHotelsList(hotelData.hotelsData.result);
        setNumberOfPages(Math.round(hotelData.hotelsData.primary_count / 20));
      } catch (error) {
        setFetchError(true);
      }
      setIsLoading(false);
    };
    getData();
  }, [page, destination]);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        {isLoading ? (
          <DataLoading />
        ) : (
          <>
            <Stack spacing={4}>
              {fetchError ? (
                <Alert severity="error">Error loading hotels</Alert>
              ) : (
                hotelsList.map((hotel) => {
                  return (
                    <HotelCard
                      key={hotel.hotel_id}
                      id={hotel.hotel_id}
                      hotelName={hotel.hotel_name}
                      hotelAddress={hotel.address}
                      minPrice={hotel.min_total_price}
                      currency={hotel.currencycode}
                      photoURL={hotel.max_photo_url}
                      hotelClass={hotel.class}
                      distanceFromCenter={hotel.distance_to_cc}
                      cityDistrict={hotel.district}
                      hotelZipcode={hotel.zip}
                      cityName={hotel.city_trans}
                    />
                  );
                })
              )}
            </Stack>
            <Box
              display={fetchError ? "none" : "flex"}
              sx={{ justifyContent: "center", my: 3 }}
            >
              <Pagination
                count={numberOfPages}
                page={page}
                onChange={pageChangeHandler}
                size="large"
              />
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export default Hotels;
