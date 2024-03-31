import { Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSort from "./TableSort";

const TableHeadElem = () => {

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableSort />
        {["Tagi", "Liczba postów"].map(header => {
          return (
            <TableCell key={header} sx={{}}>
              <Typography>{header}</Typography>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadElem;
