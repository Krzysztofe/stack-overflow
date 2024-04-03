import { useQuery } from "@tanstack/react-query";
import HttpError from "../../../components/HttpError";
import { URL_tags } from "../../../data/dataURL";
import { fetchTags } from "../../../services/fetchTags";
import LoadingPage from "../../LodingPage";
import TagsContent from "../TagsContent";
import useTagsListStore from "../../../zustandStores/useTagsListStore";
import { getTagsToPrint } from "./utilsIndexTags";

export const tagsToPrint: {
  tags: string[];
  counts: number | string;
  isChecked: false;
  id: number;
}[] = [
  {
    tags: ["javascript", "node.js", "prisma"],
    counts: 2222,
    isChecked: false,
    id: 1,
  },
  {
    tags: ["lua", "fivem"],
    counts: 22,
    isChecked: false,
    id: 2,
  },
  {
    tags: ["android", "android-studio", "github"],
    counts: 22,
    isChecked: false,
    id: 3,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 4,
  },
  {
    tags: ["Brak"],
    counts: "Brak",
    isChecked: false,
    id: 5,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 6,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 7,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 8,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 9,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 10,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 11,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 12,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 13,
  },
  {
    tags: ["c++", "sfml", "trigonometry"],
    counts: 22,
    isChecked: false,
    id: 14,
  },
];

type TagsData = {
  items: {
    tags: any[];
    view_count: number;
  }[];
};

const IndexTags = () => {
  // const {
  //   isLoading,
  //   error,
  //   data: tags,
  // } = useQuery<TagsData>({
  //   queryFn: () => fetchTags(URL_tags),
  //   queryKey: ["tags"],
  //   staleTime: Infinity,
  // });

  const setTags = useTagsListStore(state => state.setTags);

  // const tagsToPrint = getTagsToPrint(tags);
  setTags(tagsToPrint);

  // if (isLoading) {
  //   return <LoadingPage />;
  // }
  // if (error) {
  //   return <HttpError errorMsg={error} />;
  // }

  return <TagsContent />;
};

export default IndexTags;
