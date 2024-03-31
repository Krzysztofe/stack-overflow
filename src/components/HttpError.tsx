import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type Props = {
  errorMsg: Error;
};

const HttpError = (props: Props) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Box sx={{ textAlign: "center" }}>{props.errorMsg.message} <br/> Spróbuj ponownie</Box>
    </Grid>
  );
};

export default HttpError;
