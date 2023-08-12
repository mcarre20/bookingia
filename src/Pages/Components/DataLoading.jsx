import { Box, CircularProgress } from "@mui/material";

function DataLoading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100dvh",
      }}
      color="secondary"
    >
      <CircularProgress />
    </Box>
  );
}

export default DataLoading;
