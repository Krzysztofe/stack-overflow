import TableContainer from "@mui/material/TableContainer";
import { fetchTags } from "../../services/fetchTags";
import { URL_tags } from "../../data/dataURL";
import { useQuery } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import TableHeadElem from "./TableHeadElem";
import TableBodyElem from "./TableBodyElem";

const TagsContent = () => {
  return (
    <div>
      <TableContainer sx={{ padding: { xs: 1, sm: 0 } }}>
        
        <Table aria-label="simple table">
          <TableHeadElem />
          <TableBodyElem />
        </Table>
      </TableContainer>
    </div>
  );
};

export default TagsContent;
