import { useQuery } from "react-query";
import Table from "../../../../adminShared/components/Table/index";
import { GetCategory } from "../../../../adminShared/services/dataApi";

const CategoryTable = () => {
  const title = ["ID", "image", "Name", "Slug"];

  const { data, isLoading, isError, error } = useQuery(
    "category",
    GetCategory
  );
  const dataArray = data ? Object.values(data) : [];

  return <Table data={dataArray} headers={title} />;
};

export default CategoryTable;
