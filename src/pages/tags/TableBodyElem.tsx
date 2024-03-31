import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import TableHeadElem from "./TableHeadElem";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../../services/fetchTags";
import { URL_tags } from "../../data/dataURL";


type TagsData = {
  items: {
    tags: any[]; 
    view_count: number
  }[];
};

const tagi = [
  ["javascript", "node.js", "prisma"],
  ["lua", "fivem"],
  ["android", "android-studio", "github"],
  ["c++", "sfml", "trigonometry"],
];

const county = [21, 2, 63, 1542]


const TableBodyElem = () => {
//   const { data: tags } = useQuery<TagsData>({
//     queryFn: () => fetchTags(URL_tags),
//     queryKey: ["tags"],
//     staleTime: Infinity,
//   });

//   const tagsToPrint = tags?.items.map(({ tags }) => {
//     return tags;
//   });

//   const countsToPrint = tags?.items.map(({ view_count }) => {
//     return view_count;
//   });

//   console.log("www", countsToPrint);

  return <TableBody></TableBody>;
};

export default TableBodyElem;
