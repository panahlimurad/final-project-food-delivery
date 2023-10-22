import Head from "next/head";
import React from "react";
import LayoutAdmin from "../../../layoutAdmin/LayoutAdmin";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Table from "../../../feature/adminShared/components/Table";
import { useQuery } from "react-query";
import { GetOffer } from "../../../feature/adminShared/services/dataApi";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Offers = () => {
  const title = ["ID", "image", "Title", "Description"];

  const { data, isLoading, isError, error } = useQuery("offers", GetOffer, {
    onSuccess: (res) => {
      console.log(res);
    },
  });
  const dataArray = data ? Object.values(data) : [];
  return (
    <>
      <LayoutAdmin>
        <div className="text-white bg-gray-400">
          <Head>
            <title>Offers</title>
          </Head>
          <Table data={dataArray} headers={title} />
        </div>
      </LayoutAdmin>
    </>
  );
};

export default Offers;
