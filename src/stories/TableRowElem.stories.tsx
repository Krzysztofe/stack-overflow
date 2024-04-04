import TableRowElem from "../pages/tags/TableRowElem";

export default {
  title: "TableRowElem",
  component: TableRowElem,
};

export const Primary = () => (
  <TableRowElem
    tagData={{
      id: 1,
      tags: ["Tag1", "Tag2"],
      counts: 10,
      isChecked: false,
    }}
  />
);
