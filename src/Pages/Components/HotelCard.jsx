import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { auth, db } from "../../firebase";

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
  cityName,
}) {
  //get user auth status

  const { userIsLogin } = useContext(AuthContext);

  //side effect
  //save hotel as favorite
  const favoriteHandler = async () => {
    const UID = auth.currentUser.uid;
    const favoriteRef = doc(db, "users", UID);
    await updateDoc(favoriteRef, {
      favorites: arrayUnion({ id, hotelName, cityName }),
    });
  };

  return (
    <Card sx={{ display: "flex", padding: 2, gap: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 200 }}
        image={photoURL}
        alt="hotel picture"
        loading="lazy"
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
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "500", fontStyle: "italic", textAlign: "right" }}
          >
            From {`${minPrice.toFixed(2)} ${currency}`}
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              onClick={favoriteHandler}
              sx={{ display: userIsLogin ? "block" : "none" }}
            >
              Mark As Favorite
            </Button>
            <Link
              to={`/hotel/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                sx={{ color: "white" }}
              >
                See Rooms
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default HotelCard;
