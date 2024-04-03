import { create } from "zustand";

type ModelStore = {
  tags: any;

  setTags: (event: any) => void;
  sortTags: () => void;
  checkTags: (idx:number) => void;
};

const useTagsListStore = create<ModelStore>(set => ({
  tags: [],

  setTags: event => {
    set(state => ({ tags: event }));
  },

  sortTags: () => {
    set(state => ({ tags: state.tags.slice().reverse() }));
  },
  checkTags: idx => {
    set(state => ({
      tags: state.tags.map((tag: any) =>
        idx === tag.id ? { ...tag, isChecked: !tag.isChecked } : tag
      ),
    }));
  },
}));

export default useTagsListStore;
