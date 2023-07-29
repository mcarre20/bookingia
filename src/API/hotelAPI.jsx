const APIKey = import.meta.env.VITE_HOTEL_API_KEY;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": APIKey,
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

export async function searchLocation(location) {
  let cityData;
  let error = false;
  try {
    const resp = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=${location}`,
      options
    );
    const data = await resp.json();
    cityData = data[0];
  } catch (err) {
    error = true;
  }
  return { cityData, error };
}
export async function searchHotels(
  locationID,
  numberOfRooms,
  numberOfAdults,
  checkinDate,
  checkoutDate
) {
  let fetchedHotelList;
  let error = false;
  try {
    const resp = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/search?room_number=${numberOfRooms}&locale=en-us&filter_by_currency=USD&dest_id=${locationID}&order_by=class_descending&adults_number=${numberOfAdults}&checkout_date=${checkoutDate}&units=metric&dest_type=city&checkin_date=${checkinDate}&page_number=0`,
      options
    );

    const data = await resp.json();
    fetchedHotelList = data;
  } catch (error) {
    error = true;
  }

  return { fetchedHotelList, error };
}
