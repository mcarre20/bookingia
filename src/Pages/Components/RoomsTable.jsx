import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function RooomsTable({ roomsDetails, hotelURL }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Room Type</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Deposit Required</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {roomsDetails.map((room) => (
            <TableRow
              key={room.block_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${room.name}`} <br />
                {`Room Size: ${Math.trunc(room.room_surface_in_feet2)}ft`}
                <sup>2</sup>
              </TableCell>
              <TableCell>
                {room.deposit_required === 1 ? "Yes" : "No"}
              </TableCell>
              <TableCell>{`${room.min_price.price} ${room.min_price.currency}`}</TableCell>
              <TableCell>
                <Button color="secondary" variant="outlined">
                  <a
                    href={hotelURL}
                    target="_blank"
                    rel="noonpener"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Book Now
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RooomsTable;
