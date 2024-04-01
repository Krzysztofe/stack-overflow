import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Error404 = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", color: "error.main" }}
    >
      <Box sx={{ textAlign: "center" }}>
        Błąd 404 <br /> Strona nie istnieje
      </Box>
    </Grid>
  );
};

export default Error404;
