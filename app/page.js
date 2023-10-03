import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NewsCard from "@/components/NewsCard.js/NewsCard";
import Listcards from "@/components/listCard/ListCards";
import { data } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-[8rem] pt-0">
      <Header />
      <div className="pt-[5%] w-full mt-[5rem]">
        <h1 className="text-[2rem] font-bold">A Web Insights by Falah</h1>
        <p>Front-end web developer</p>
        <div className="mt-[6rem] flex flex-row w-full justify-between">
          <div className="w-[50%] ">
            {data.map((item, index) => (
              <Listcards key={index} {...item} />
            ))}
          </div>
          <div className="w-[47%]">
            <NewsCard />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
