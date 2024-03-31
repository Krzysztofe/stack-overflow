import TableContainer from "@mui/material/TableContainer";
import { fetchTags } from "../../services/fetchTags";
import { URL_tags } from "../../data/dataURL";
import { useQuery } from "@tanstack/react-query";


const TagsContent = () => {
 const {
   data: tags,
   isLoading,
   error,
 } = useQuery({
   queryFn: () => fetchTags(URL_tags),
   queryKey: ["tags"],
   staleTime: Infinity,
 });


 console.log('',tags)

  return (
    <div>
      <TableContainer sx={{ padding: { xs: 1, sm: 0 } }}> nnnnn</TableContainer>
    </div>
  );
};

export default TagsContent;
