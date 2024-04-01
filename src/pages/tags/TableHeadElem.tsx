import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSort from "./TableSort";

const TableHeadElem = () => {
  return (
    <TableHead>
      <TableRow sx={{ borderTop: "1px solid", borderColor: "primary.main"}}>
        <TableCell></TableCell>
        <TableSort />
        {["Tagi", "Posty"].map(header => {
          return (
            <TableCell key={header}>
              <Typography variant="fs_primary" sx={{ fontWeight: "600" }}>
                {header}
              </Typography>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadElem;
