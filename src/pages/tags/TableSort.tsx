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
        variant = "fs_primary"
        sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}
        onClick={handleSortClick}
      >
        Nr
        <ArrowDownwardIcon
          sx={{
            transform: rotate ? `rotate(180deg)` : `rotate(0deg)`,
            transition: "0.3s",
            fontSize: "1rem",
            color: "primary.dark"
          }}
        />
      </Typography>
    </TableCell>
  );
};

export default TableSort;
