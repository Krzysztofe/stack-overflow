import Container from "@mui/material/Container";
import TableContainerElem from "./TableContainerElem";

const TagsContent = () => {
  return (
    <Container
      sx={{ display: "grid", placeItems: "center" }}
      style={{ height: "100vh" }}
    >
      <TableContainerElem />
    </Container>
  );
};

export default TagsContent;
