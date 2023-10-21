import { useQuery } from "react-query";
import Table from "../../../../adminShared/components/Table/index";
import { GetOffer } from "../../../../adminShared/services/dataApi";




const CategoryTable = () => {

  const title = ["ID", "image", "Title", "Description"]

  const { data, isLoading, isError, error } = useQuery(
    "offers",
    GetOffer,
    {
      onSuccess: (res) => {
        console.log(res);
      },
    }
  );
  const dataArray = data ? Object.values(data) : [];
    console.log(dataArray);
  
  return <Table data={dataArray} headers={title}/>;
};

export default CategoryTable;
