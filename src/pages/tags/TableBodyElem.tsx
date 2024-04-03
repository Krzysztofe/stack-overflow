import TableBody from "@mui/material/TableBody";
import usePaginationStore from "../../zustandStores/usePaginationStore";
import useTagsListStore from "../../zustandStores/useTagsListStore";
import TableRowElem from "./TableRowElem";

const TableBodyElem = () => {
  const page = usePaginationStore(state => state.page);
  const rowsPerPage = usePaginationStore(state => state.rowsPerPage);
  const tags = useTagsListStore(state => state.tags);

  const displayedTags = tags?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableBody>
      {displayedTags?.map((tagData: any) => {
        return <TableRowElem key={Math.random()} tagData={tagData} />;
      })}
    </TableBody>
  );
};

export default TableBodyElem;
