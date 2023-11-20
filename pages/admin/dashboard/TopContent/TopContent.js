import style from "./TopContent.module.css";
import {
  Bar,
  Bubble,
  Chart,
  Line,
  Radar,
  Pie,
  Doughnut,
  Scatter,
  PolarArea,
} from "react-chartjs-2";
import {
  BarElement,
  Tooltip,
  Legend,
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LinearScale,
  LineElement,
  ArcElement,
} from "chart.js";
import Diagram1 from "../../../../feature/adminFolders/assets/image/dashboard/diagram1.svg";
import Diagram2 from "../../../../feature/adminFolders/assets/image/dashboard/diagram2.svg";
import Image from "next/image";
import { t } from "i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  PointElement,
  CategoryScale,
  LineElement,
  LinearScale,
  ArcElement
);

const TopContent = () => {
  const { t, i18n } = useTranslation("common");

  const state = {
    labels: ["KFC", "KLM", "American Express", "Mcdonalds"],
    datasets: [
      {
        label: "restaurants",
        backgroundColor: ["#eb5757", "#a84069", "#bb6bd9", "#4cd964"],
        data: ["10", "80", "120", "200"],
      },
    ],
  };

  const month = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "salary",
        backgroundColor: ["#eb5757", "#a84069", "#bb6bd9","#f4a26c","#a84069"],
        data: ["10", "80", "120", "250","150", "60", "140", "280","320", "110", "150", "200",],
      },
    ],
  };



  return (
    <div className="flex mb-6 max-[668px]:flex-col">
      {/* <section>
      <Doughnut  data={state}/>
      </section> */}
      <div
        className={`${style.box1} relative w-2/5 max-[668px]:w-full max-[668px]:mb-6 bg-[#27283C] text-[#C7C7C7]`}>
        <h2 className="mb-4">{t("common:Orders")}</h2>
        <div className="flex justify-center items-center relative">
          <section>
            <Doughnut data={state} />
          </section>
        <p className={`${style.paragraf1} absolute top-36`}>
          {t("common:Projects")}
          <span className="block ml-1.5">{t("common:account")}</span>
        </p>
        </div>

        <div className="mt-8 flex gap-4 ml-2 max-[1230px]:ml-0 max-[1230px]:flex-col max-[830px]:text-xs max-[668px]:text-base max-[668px]:flex-row max-[668px]:ml-4 max-[410px]:ml-0">
          <div className="flex items-center gap-3 ">
            <span className="w-4 h-4 rounded-full bg-[#EB5757]"></span>
            <p>KFC</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#A84069]"></span>
            <p>KLM</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#BB6BD9]"></span>
            <p>American Express</p>
          </div>
        </div>
      </div>
      <div className={`${style.box2}  w-3/5 max-[668px]:w-full bg-[#27283C]`}>
        <h2 className="mb-2 text-[#C7C7C7]">{t("common:TotalSalary")}</h2>
        <p className="mb-6 text-[#4F4F4F]">{t("common:Years")}</p>
        <div className="flex justify-center items-center">
        <section className="w-full">
            <Line width={500} height={220} data={month} />
          </section>
        </div>
        <div className="text-[#C7C7C7] mt-8 flex  gap-4 ml-28 max-[1220px]:ml-16 max-[950px]:ml-8 max-[880px]:ml-2 max-[830px]:text-xs max-[668px]:text-base max-[668px]:ml-8">
          <div className="flex items-center  gap-3">
            <span className="w-4 h-4 rounded-full bg-[#F4A26C]"></span>
            <p>{t("common:February")}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#3FAEA3]"></span>
            <p>{t("common:March")}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#914DF0]"></span>
            <p>{t("common:April")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
