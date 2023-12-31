"use client";

import Footer from "@/components/Footer/Footer";
import { blogPosts } from "@/lib/utils";
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
      <Link
        href="/"
        className="absolute left-[25%] max-sm:left-[2.5rem] top-[6rem] max-sm:top-[2.5rem]"
      >
        <ArrowLeftIcon />
      </Link>
      <div
        className="bg-accent pt-[8rem] max-sm:pt-[4rem] pb-[4rem] max-sm:pb-[2rem] px-[25%] max-sm:px-[2.5rem]  flex flex-col justify-center
      shadow-sm"
      >
        <p className="text-[18px] font-semibold">{blogToDisplay.heading}</p>
        <p className="text-[10px] text-muted-foreground">
          {blogToDisplay.date}
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[3rem] max-sm:mt-[2rem] mb-[6rem] max-sm:mb-[4rem]">
        {blogToDisplay.CONTENT.map((section, index) => (
          <div className="w-[50%] max-sm:w-[80%]" key={index}>
            <h1 className="text-foreground mt-[2rem] mb-[1rem] ">
              {section.title}
            </h1>
            <p className="text-[14px] text-muted-foreground font-normal">
              {section.content}
            </p>
            {section.points && (
              <ul className="list-disc text-[14px] mt-[4px]">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <p className=" text-muted-foreground ">
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
                    <p className="text-muted-foreground ">
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
                  <li className="mt-[4px] text-foreground " key={benefitIndex}>
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
                      className="mt-[4px] text-muted-foreground "
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
