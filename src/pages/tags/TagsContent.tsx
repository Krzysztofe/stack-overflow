import Container from "@mui/material/Container";
import TableContainerElem from "./TableContainerElem";

const TagsContent = () => {
  return (
    <main>
      <Container
        sx={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          color: "error.main",
        }}
      >
        <TableContainerElem />
      </Container>
    </main>
  );
};

export default TagsContent;
