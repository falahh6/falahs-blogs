"use client";

import Footer from "@/components/Footer/Footer";
import { blogPosts } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "200%", // Start off-screen to the left
  },
  animate: {
    opacity: 1,
    x: "0%", // Slide in from the left
    transition: {
      duration: 0.5, // Adjust the duration as needed
    },
  },
  exit: {
    opacity: 0,
    x: "100%", // Slide out to the right
    transition: {
      duration: 0.5, // Adjust the duration as needed
    },
  },
};

const page = ({ params }) => {
  const date = new Date();
  const { blogname } = params;

  const blogToDisplay = blogPosts.find((blogs) => blogs.path === blogname);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="h-full "
    >
      <Link href="/" className="absolute left-[25%] top-[6rem]">
        <ArrowLeftIcon />
      </Link>
      <div className="bg-gray-200 pt-[8rem] pb-[4rem] px-[25%] flex flex-col justify-center border-b border-gray-300 shadow-sm">
        <p className="text-[18px] font-semibold">{blogToDisplay.heading}</p>
        <p className="text-[10px]">{blogToDisplay.date}</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[3rem] mb-[6rem]">
        {blogToDisplay.CONTENT.map((section, index) => (
          <div className="w-[50%]" key={index}>
            <h1 className="text-gray-900 mt-[2rem] mb-[1rem] ">
              {section.title}
            </h1>
            <p className="text-[14px] text-gray-700 font-normal">
              {section.content}
            </p>
            {section.points && (
              <ul className="list-disc text-[14px] mt-[4px]">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <p className=" text-gray-700 ">
                      <span className="font-medium">{point.title}</span>
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {section.advantages && (
              <ul className="list-disc text-[14px] mt-[4px]">
                {section.advantages.map((advantage, advantageIndex) => (
                  <li key={advantageIndex}>
                    <p className=" text-gray-700 ">
                      <span className="font-medium">{advantage.title}</span>
                      {advantage.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {section.benefits && (
              <ul className="list-disc text-[14px] mt-[4px]">
                {section.benefits.map((benefit, benefitIndex) => (
                  <li className="mt-[4px] text-gray-700 " key={benefitIndex}>
                    <p>
                      <span className="font-medium">{benefit.title}</span>
                      {benefit.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            {section.optimisations && (
              <ul className="list-disc text-[14px] mt-[4px]">
                {section.optimisations.map(
                  (optimisation, optimisationsIndex) => (
                    <li
                      className="mt-[4px] text-gray-700 "
                      key={optimisationsIndex}
                    >
                      <p>
                        <span className="font-medium">
                          {optimisation.title}
                        </span>
                        {optimisation.content}
                      </p>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default page;
