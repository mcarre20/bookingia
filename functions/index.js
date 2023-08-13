/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getHotels = onRequest(async (req, res) => {
  const APIKEY = process.env.HOTEL_API_KEY;
  const city = req.query.city;
  const rooms = req.query.rooms;
  const adults = req.query.adults;
  const checkin = req.query.checkin;
  const checkout = req.query.checkout;
  const pageNumber = req.query.page_number;

  // Make sure not empty strings are passed before making request
  if (
    city === "" ||
    rooms === "" ||
    adults === "" ||
    checkin === "" ||
    checkout === "" ||
    pageNumber === ""
  ) {
    res.status(422).send("Check query possible empty values");
    return;
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    //retreive destionation ID
    const cityFetch = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=${city}`,
      options
    );
    const locationData = await cityFetch.json();
    const cityID = locationData[0].dest_id;
    // get list of hotels using the destionation if
    const hotelsFetch = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=${rooms}&locale=en-us&filter_by_currency=USD&dest_id=${cityID}&order_by=class_descending&adults_number=${adults}&checkout_date=${checkout}&units=metric&dest_type=city&checkin_date=${checkin}&page_number=${pageNumber}`,
      options
    );

    const hotelsData = await hotelsFetch.json();

    res.status(200).json({ hotelsData });
  } catch (error) {
    res.status(500).send(error);
  }
  return;
});

exports.getHotelsDetails = onRequest(async (req, res) => {
  const APIKEY = process.env.HOTEL_API_KEY;
  const hotelID = req.query.hotel_id;
  const checkin = req.query.checkin;
  const checkout = req.query.checkout;
  const adults = req.query.adults;
  const rooms = req.query.rooms;

  // Make sure not empty strings are passed before making request
  if (
    hotelID === "" ||
    rooms === "" ||
    adults === "" ||
    checkin === "" ||
    checkout === ""
  ) {
    res.status(422).send("Check query possible empty values");
    return;
  }

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    //fetch hotel details
    const hotelDatafetch = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/data?locale=en-us&hotel_id=${hotelID}`,
      options
    );
    const hotelData = await hotelDatafetch.json();

    //fetch hotel room
    const numberAdultsPerRoom = [];
    for (let i = 0; i < Number(rooms); i++) {
      numberAdultsPerRoom.push(adults);
    }
    const hotelRoomfetch = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/room-list?units=metric&adults_number_by_rooms=${numberAdultsPerRoom.join(
        "%"
      )}${
        Number(rooms) > 1 ? `c${rooms}` : ""
      }&checkin_date=${checkin}&locale=en-us&checkout_date=${checkout}&currency=USD&hotel_id=${hotelID}`,
      options
    );
    const hotelRoomData = await hotelRoomfetch.json();

    //fetch hotel Pictures
    const hotelPicturefetch = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=en-us&hotel_id=${hotelID}`,
      options
    );
    const hotelPicture = await hotelPicturefetch.json();

    res.status(200).json({ hotelData, hotelRoomData, hotelPicture });
  } catch (error) {
    res.status(500).send(error);
  }
});
