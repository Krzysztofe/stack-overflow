import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const LoadingPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <CircularProgress />
    </Grid>
  );
};

export default LoadingPage;
