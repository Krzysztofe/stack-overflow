import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBodyElem from "./TableBodyElem";
import TableHeadElem from "./TableHeadElem";
import TablePaginationElem from "./TablePaginationElem";


const TableContainerElem = () => {
  return (
    <TableContainer sx={{ padding: { xs: 1, sm: 0 } }}>
      <TablePaginationElem />
      <Table aria-label="simple table">
        <TableHeadElem />
        <TableBodyElem />
      </Table>
    </TableContainer>
  );
};

export default TableContainerElem;
