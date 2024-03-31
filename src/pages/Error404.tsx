import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Error404 = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Box sx={{ textAlign: "center" }}>
        Błąd 404 <br /> Strona nie istnieje
      </Box>
    </Grid>
  );
};

export default Error404;
