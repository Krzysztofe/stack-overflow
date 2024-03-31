import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ErrorPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Box sx={{ textAlign: "center" }}>
        Błąd 404 <br /> Szukana strona nie istnieje
      </Box>
    </Grid>
  );
};

export default ErrorPage;
