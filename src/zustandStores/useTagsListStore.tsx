import { create } from "zustand";

type ModelStore = {
  tags: any;

  setTags: (event: any) => void;
};

const useTagsListStore = create<ModelStore>(set => ({
  tags: [],

  setTags: event => {
    set(state => ({ tags: event }));
  },
}));

export default useTagsListStore;
