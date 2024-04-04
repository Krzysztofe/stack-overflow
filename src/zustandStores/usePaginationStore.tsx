import { create } from "zustand";

type ModelStore = {
  page: number;
  rowsPerPage: number;
  setRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setPage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
};

const usePaginationStore = create<ModelStore>(set => ({
  page: 0,
  rowsPerPage: 5,
  setRowsPerPage: event => {
    set(state => ({ rowsPerPage: parseInt(event.target.value) }));
  },
  setPage: (event, newPage: number) => {
    const page = event ? newPage : 0;
    set(state => ({ page: newPage }));
  },
}));

export default usePaginationStore;
