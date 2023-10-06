"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NewsCard from "@/components/NewsCard.js/NewsCard";
import Listcards from "@/components/listCard/ListCards";
import AnimatedTextWord from "@/components/ui/AnimatedText";
import { blogPosts } from "@/lib/utils";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 1,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="flex flex-col min-h-screen bg-background
      text-foreground"
    >
      <Header />
      <main className="flex-grow p-[8rem] pt-0">
        <div className="pt-[5%] w-full mt-[5rem]">
          <AnimatedTextWord text={"The Web Insights by Falah"} />
          <p className="text-muted-foreground">Front-end web developer</p>
          <div className="mt-[6rem] flex flex-row w-full justify-between">
            <div className="w-[50%]">
              {blogPosts.map((blog, index) => (
                <Listcards
                  key={index}
                  name={blog.name}
                  heading={blog.heading}
                  path={blog.path}
                />
              ))}
            </div>
            <div className="w-[47%]">
              <NewsCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
