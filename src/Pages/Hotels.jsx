import { Container, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { searchHotels, searchLocation } from "../API/HotelAPI";
import { SearchContext } from "../Context/SeachContext";
import DataLoading from "./Components/DataLoading";
import HotelCard from "./Components/HotelCard";

function Hotels() {
  const { destination: city } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [hotelsList, setHotelsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { cityData, error: cityFetchError } = await searchLocation(city);
      if (cityFetchError) {
        setFetchError(true);
        return;
      }
      const locationID = cityData.dest_id.toString();
      const { fetchedHotelList, error: hotelListFetchError } =
        await searchHotels(locationID, 1, 2, "2023-09-26", "2023-09-30");
      if (hotelListFetchError) {
        setFetchError(true);
        return;
      }
      setHotelsList(fetchedHotelList.result);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "2rem" }}>
        {isLoading ? (
          <DataLoading />
        ) : (
          <Stack spacing={4}>
            {hotelsList.map((hotel) => {
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
                />
              );
            })}
          </Stack>
        )}
      </Container>
    </>
  );
}

export default Hotels;
