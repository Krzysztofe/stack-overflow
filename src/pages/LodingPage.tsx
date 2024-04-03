import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const LoadingPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <CircularProgress sx={{ color: "primary.dark" }} />
    </Grid>
  );
};

export default LoadingPage;
