import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelData, getHotelPictures, getHotelRooms } from "../API/HotelAPI";
import { SearchContext } from "../Context/SeachContext";
import DataLoading from "./Components/DataLoading";
import RooomsTable from "./Components/roomsTable";

function HotelDetails() {
  const { id } = useParams();
  const { checkin, checkout, numberOfAdults, numberOfRooms } =
    useContext(SearchContext);

  //state
  const [isLoading, setIsLoading] = useState(true);
  const [hotelData, setHotelData] = useState({});
  const [hotelRoomsData, setHotelRoomsData] = useState([]);
  const [hotelPictures, sethotelPictures] = useState([]);

  //Side effect - fetech Data
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedHotelData = await getHotelData(id);
        const fetchedHotelRoomData = await getHotelRooms(
          id,
          checkin,
          checkout,
          numberOfAdults,
          numberOfRooms
        );
        const fetchedHotelPictures = await getHotelPictures(id);

        setHotelData(fetchedHotelData);
        setHotelRoomsData(fetchedHotelRoomData);
        sethotelPictures(fetchedHotelPictures);
      } catch (error) {
        console.log(error);
      }

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
          <Box component="main">
            <Box>
              <Typography
                variant="h4"
                color="secondary"
                sx={{ fontWeight: "bold" }}
              >
                {hotelData.name}
              </Typography>
              <Typography>{hotelData.address}</Typography>
              <Typography>{`${hotelData.city}, ${hotelData.zip}`}</Typography>
              <Typography>{`${hotelData.class} Stars`}</Typography>
            </Box>
            <Box>
              <ImageList sx={{ width: "100%", height: "500px" }} cols={4}>
                {hotelPictures.map((picture) => (
                  <ImageListItem key={picture.photo_id}>
                    <img
                      src={picture.url_max}
                      srcSet={picture.url_max}
                      alt="hotel Picture"
                      width="200"
                      height="auto"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ my: 4, fontWeight: "bold" }}>
                Room Types
              </Typography>
              <Box>
                {hotelRoomsData[0].total_blocks === 0 ? (
                  <Typography>No Rooms Available</Typography>
                ) : (
                  <RooomsTable
                    roomsDetails={hotelRoomsData[0].block}
                    hotelURL={hotelData.url}
                  />
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}

export default HotelDetails;
