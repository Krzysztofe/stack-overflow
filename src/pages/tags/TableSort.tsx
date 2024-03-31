import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import useTagsListStore from "../../zustandStores/useTagsListStore";
import { useState } from "react";

const TableSort = () => {
  const sortTags = useTagsListStore(state => state.sortTags);
  const [rotate, setRotate] = useState(false);
  const handleSortClick = () => {
    sortTags();
    setRotate(prev => !prev);
  };

  return (
    <TableCell sx={{ cursor: "pointer" }}>
      <Typography
        component="span"
        sx={{ display: "flex", alignItems: "center" }}
        onClick={handleSortClick}
      >
        Nr
        <ArrowDownwardIcon
          sx={{
            transform: rotate ? `rotate(180deg)` : `rotate(0deg)`,
            transition: "0.3s",
          }}
        />
      </Typography>
    </TableCell>
  );
};

export default TableSort;
