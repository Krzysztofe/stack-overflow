export const getTagsToPrint = (tags:any) =>{

return  tags?.items.map(({ tags, view_count }:any, idx:any) => {
   const formattedTags = tags.length === 0 ? ["Brak danych"] : tags;
   const formattedCount = view_count ? view_count : "Brak danych";
   return {
     id: idx + 1,
     tags: formattedTags,
     counts: formattedCount,
     isChecked: false,
   };
 });
}

