import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function HotelCard({
  id,
  hotelName,
  hotelAddress,
  minPrice,
  currency,
  photoURL,
  hotelClass,
  distanceFromCenter,
  cityDistrict,
  hotelZipcode,
}) {
  return (
    <Card sx={{ display: "flex", padding: 2, gap: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 200 }}
        image={photoURL}
        alt="hotel picture"
      />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" color="secondary">
              {hotelName}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {hotelClass} Stars
            </Typography>
          </Box>
          <Box>
            <Typography>{hotelAddress}</Typography>
            <Typography>
              {cityDistrict},{hotelZipcode}
            </Typography>
            <Typography>{distanceFromCenter}km From City Center</Typography>
          </Box>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            alignSelf: "flex-end",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "500", fontStyle: "italic", textAlign: "right" }}
          >
            From {`${minPrice.toFixed(2)} ${currency}`}
          </Typography>
          <Button variant="contained" size="medium">
            See Rooms
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default HotelCard;
