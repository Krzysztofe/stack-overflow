import { create } from "zustand";
import { ModelTagToPrint } from "../sharedModels/modelTagToPrint";

type ModelStore = {
  tags: ModelTagToPrint[] | null;
  setTags: (tagsList: ModelTagToPrint[] | null) => void;
  sortTags: () => void;
  checkTags: (idx: number) => void;
};

const useTagsListStore = create<ModelStore>(set => ({
  tags: null,

  setTags: tagsList => {
    set({ tags: tagsList });
  },

  sortTags: () => {
    set(state => ({
      tags: state.tags ? state.tags.slice().reverse() : null,
    }));
  },
  
  checkTags: idx => {
    set(state => ({
      tags: state.tags
        ? state.tags.map((tag: ModelTagToPrint) => {
            if (tag !== null && idx === tag.id) {
              return { ...tag, isChecked: !tag.isChecked };
            }
            return tag;
          })
        : null,
    }));
  },
}));

export default useTagsListStore;
