import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

type Props = {
  tagData: {
    tags: any[];
    counts: number | string;
  };
  idx: number;
};

const TableRowElem = (props: Props) => {
  return (
    <TableRow>
      <TableCell>{props.idx + 1}</TableCell>
      <TableCell>{props.tagData.tags.join(", ")}</TableCell>
      <TableCell>{props.tagData.counts}</TableCell>
    </TableRow>
  );
};

export default TableRowElem;
