import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import useTagsListStore from "../../zustandStores/useTagsListStore";

type Props = {
  tagData: {
    tags: any[];
    counts: number | string;
    isChecked: boolean;
  };
  idx: number;
};

const TableRowElem = (props: Props) => {
  const checkTags = useTagsListStore(state => state.checkTags);

  return (
    <TableRow
      sx={{
        backgroundColor: props.tagData.isChecked ? "grey" : "transparent",
        cursor: "pointer",
      }}
      onClick={() => checkTags(props.idx)}
    >
      <TableCell>
        <Checkbox
          checked={props.tagData.isChecked}
          onChange={() => checkTags(props.idx)}
          size="small"
          color="default"
          sx = {{padding: "0"}}
        />
      </TableCell>
      <TableCell>{props.idx + 1}</TableCell>
      <TableCell>{props.tagData.tags.join(", ")}</TableCell>
      <TableCell>{props.tagData.counts}</TableCell>
    </TableRow>
  );
};

export default TableRowElem;
