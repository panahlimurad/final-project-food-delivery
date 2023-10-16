import Table from "../../../../adminShared/components/Table/index";

const CategoryTable = ({ rows, isLoading }) => {
  return <Table rows={rows} isLoading={isLoading} />;
};

export default CategoryTable;
