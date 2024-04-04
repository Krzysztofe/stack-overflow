import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import useTagsListStore from "../../zustandStores/useTagsListStore";
import { useTheme } from "@mui/material/styles";
import { ModelTagToPrint } from "../../sharedModels/modelTagToPrint";

type Props = {
  tagData: ModelTagToPrint;
};

const TableRowElem = (props: Props) => {
  const checkTags = useTagsListStore(state => state.checkTags);
  const theme = useTheme();
  return (
    <TableRow
      sx={{
        bgcolor: props.tagData.isChecked
          ? "primary.dark"
          : props.tagData.id % 2 === 1
            ? "primary.main"
            : "transparent",
        cursor: "pointer",
        fontSize: theme.typography.fs_primary,
      }}
      onClick={() => checkTags(props.tagData.id)}
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
      {[
        props.tagData.id,
        props.tagData.tags.join(", "),
        props.tagData.counts,
      ].map(props => {
        return (
          <TableCell key = {Math.random()} sx={{ fontSize: theme.typography.fs_primary }}>
            {props}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default TableRowElem;
