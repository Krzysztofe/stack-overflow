import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import TableHeadElem from "./TableHeadElem";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../../services/fetchTags";
import { URL_tags } from "../../data/dataURL";
import TableRowElem from "./TAbleRowElem";

type TagsData = {
  items: {
    tags: any[];
    view_count: number;
  }[];
};

const tagsToPrint:{
    tags: string[];
    counts: number;
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
];



const TableBodyElem = () => {
//   const { data: tags } = useQuery<TagsData>({
//     queryFn: () => fetchTags(URL_tags),
//     queryKey: ["tags"],
//     staleTime: Infinity,
//   });

//   const tagsToPrint = tags?.items.map(({ tags, view_count }) => {
//     const formattedTags = tags.length === 0 ? ["Brak danych"] : tags;
//     const formattedCount = view_count ? view_count : "Brak danych";
//     return { tags: formattedTags, counts: formattedCount };
//   });

//   console.log("www", tagsToPrint);
  return (
    <TableBody>
      {tagsToPrint.map(({ tags, counts }) => {
        return <TableRowElem/>;
      })}
    </TableBody>
  );
};

export default TableBodyElem;
