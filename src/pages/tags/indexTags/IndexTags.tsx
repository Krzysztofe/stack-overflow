import { useQuery } from "@tanstack/react-query";
import HttpError from "../../../components/HttpError";
import { URL_tags } from "../../../data/dataURL";
import { fetchTags } from "../../../services/fetchTags";
import LoadingPage from "../../LodingPage";
import TagsContent from "../TagsContent";
import useTagsListStore from "../../../zustandStores/useTagsListStore";
import { getTagsToPrint } from "./utilsIndexTags";

type ModelTags = {
  items: {
    tags: string[];
    view_count: number;
  }[];
};

const IndexTags = () => {
  const {
    isLoading,
    error,
    data: tags,
  } = useQuery<ModelTags>({
    queryFn: () => fetchTags(URL_tags),
    queryKey: ["tags"],
    staleTime: Infinity,
  });

  console.log('',tags)
  const setTags = useTagsListStore(state => state.setTags);

  const tagsToPrint = getTagsToPrint(tags);
  setTags(tagsToPrint);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (error) {
    return <HttpError errorMsg={error} />;
  }

  return <TagsContent />;
};

export default IndexTags;
