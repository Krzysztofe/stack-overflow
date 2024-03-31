import { useQuery } from "@tanstack/react-query";
import HttpError from "../../components/HttpError";
import { URL_tags } from "../../data/dataURL";
import { fetchTags } from "../../services/fetchTags";
import LoadingPage from "../LodingPage";
import TagsContent from "./TagsContent";
import useTagsListStore from "../../zustandStores/useTagsListStore";

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




const IndexTags = () => {
//   const { isLoading, error, data:tags } = useQuery({
//     queryFn: () => fetchTags(URL_tags),
//     queryKey: ["tags"],
//     staleTime: Infinity,
//   });

const setTags = useTagsListStore(state => state.setTags)

setTags(tagsToPrint);

//   if (isLoading) {
//     return <LoadingPage />;
//   }
//   if (error) {
//     return <HttpError errorMsg={error} />;
//   }

  return <TagsContent />;
};

export default IndexTags;
