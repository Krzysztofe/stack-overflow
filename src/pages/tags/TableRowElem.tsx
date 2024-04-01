import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import useTagsListStore from "../../zustandStores/useTagsListStore";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  return (
    <TableRow
      sx={{
        bgcolor: props.tagData.isChecked
          ? "primary.dark"
          : props.idx % 2 === 1
          ? "primary.main"
          : "transparent",
        cursor: "pointer",
        fontSize: theme.typography.fs_primary,
      }}
      onClick={() => checkTags(props.idx)}
    >
      <TableCell>
        <Checkbox
          checked={props.tagData.isChecked}
          size="small"
          color="default"
          sx={{
            padding: "0",
          }}
        />
      </TableCell>
      <TableCell sx={{ fontSize: theme.typography.fs_primary }}>
        {props.idx + 1}
      </TableCell>
      <TableCell sx={{ fontSize: theme.typography.fs_primary }}>
        {props.tagData.tags.join(", ")}
      </TableCell>
      <TableCell sx={{ fontSize: theme.typography.fs_primary }}>
        {props.tagData.counts}
      </TableCell>
    </TableRow>
  );
};

export default TableRowElem;
