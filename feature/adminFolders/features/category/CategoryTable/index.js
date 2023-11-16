import { useQuery } from "react-query";
import Table from "../../../../adminShared/components/Table/index";
import { GetCategory } from "../../../../adminShared/services/dataApi";
import { useRouter } from "next/router";


const CategoryTable = () => {
  const title = ["ID", "image", "Name", "Slug"];

  const router = useRouter();
    const routerPath = router.pathname;

  const { data, isLoading, isError, error, refetch } = useQuery(
    "category",
    GetCategory
  );
  const dataArray = data ? Object.values(data) : [];

  return <Table data={dataArray} refetch={refetch} headers={title} routerPath="/admin/category"/>;
};

export default CategoryTable;
