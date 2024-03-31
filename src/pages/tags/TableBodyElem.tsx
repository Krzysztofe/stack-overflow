import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import TableHeadElem from "./TableHeadElem";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../../services/fetchTags";
import { URL_tags } from "../../data/dataURL";
import TableRowElem from "./TableRowElem";
import usePaginationStore from "../../zustandStores/usePaginationStore";

type TagsData = {
  items: {
    tags: any[];
    view_count: number;
  }[];
};

export const tagsToPrint: {
  tags: string[];
  counts: number | string;
}[] = [
  {
    tags: ["javascript", "node.js", "prisma"],
    counts: 22,
  },
  {
    tags: ["lua", "fivem"],
    counts: 22,
  },
  {
    tags: ["android", "android-studio", "github"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["Brak danych"],
    counts: "Brak danych",
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
  },
];

const TableBodyElem = () => {
  const page = usePaginationStore(state => state.page);
  const rowsPerPage = usePaginationStore(state => state.rowsPerPage);

  const displayedTags = tagsToPrint?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableBody>
      {displayedTags.map((tagData, idx) => {
        return <TableRowElem key={Math.random()} tagData={tagData} idx={idx} />;
      })}
    </TableBody>
  );
};

export default TableBodyElem;
