import LayoutUser from "../../feature/ClientShared/components/LayoutUser/LayoutUser";
import LayoutClient from "../../layoutClient/LayoutClient";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})

const User = () => {
  return (
    <LayoutClient>
      <div>
        <LayoutUser />
      </div>
    </LayoutClient>
  );
};

export default User;
