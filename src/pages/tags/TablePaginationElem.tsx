import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import usePaginationStore from "../../zustandStores/usePaginationStore";
import useTagsListStore from "../../zustandStores/useTagsListStore";

type ModelRowsParams = {
  from: number;
  to: number;
  count: number;
};

const TablePaginationElem = () => {
  const page = usePaginationStore(state => state.page);
  const rowsPerPage = usePaginationStore(state => state.rowsPerPage);
  const setPage = usePaginationStore(state => state.setPage);
  const setRowsPerPage = usePaginationStore(state => state.setRowsPerPage);
  const tags = useTagsListStore(state => state.tags);

  const defaultLabelDisplayedRows = ({ from, to, count }: ModelRowsParams) => {
    return (
      <Typography component="span" variant="fs_small">
        {from}–{to} z {count !== -1 ? count : to}
      </Typography>
    );
  };

  return (
    <TablePagination
      component="div"
      count={tags?.length ?? 0}
      page={page}
      onPageChange={setPage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={setRowsPerPage}
      labelRowsPerPage={
        <Typography component="span" variant="fs_small">
          Liczba wpisów na stronie
        </Typography>
      }
      labelDisplayedRows={defaultLabelDisplayedRows}
      rowsPerPageOptions={[5, 10, 15]}
      
   
      sx={{
        "& .css-194a1fa-MuiSelect-select-MuiInputBase-input": {
          fontSize: "0.7rem",
        },
        
      }}
    />
  );
};

export default TablePaginationElem;
