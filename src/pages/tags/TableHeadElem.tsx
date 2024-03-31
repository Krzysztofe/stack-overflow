import { Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useTagsListStore from "../../zustandStores/useTagsListStore";

const TableHeadElem = () => {



const tags = useTagsListStore(state => state.tags);


console.log('tag',tags)
  
  return (
    <TableHead>
      <TableRow>
        {["Tagi", "Liczba postów"].map((header, idx) => {
          return (
            <TableCell key={header} sx={{ width: idx === 0 ? "10%" : "45%" }}>
              <Typography component="span">{header}</Typography>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadElem;
