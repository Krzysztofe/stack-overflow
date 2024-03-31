import { useQuery } from "@tanstack/react-query";
import HttpError from "../../components/HttpError";
import { URL_tags } from "../../data/dataURL";
import { fetchTags } from "../../services/fetchTags";
import LoadingPage from "../LodingPage";
import TagsContent from "./TagsContent";

const IndexTags = () => {
//   const { isLoading, error } = useQuery({
//     queryFn: () => fetchTags(URL_tags),
//     queryKey: ["tags"],
//     staleTime: Infinity,
//   });

//   if (isLoading) {
//     return <LoadingPage />;
//   }
//   if (error) {
//     return <HttpError errorMsg={error} />;
//   }

  return <TagsContent />;
};

export default IndexTags;
