"use client";

const { ArrowRightIcon } = require("@radix-ui/react-icons");
const { default: Link } = require("next/link");

const Listcards = ({ heading, description }) => {
  return (
    <div className="hover:bg-slate-200 p-[1rem] h-fit rounded-md ml-[-1rem]">
      <h1 className="font-semibold">{heading}</h1>
      <p className="text-[14px] text-[#272727] py-2">{description}</p>
      <Link
        className="flex align-middle w-fit items-center text-[12px] mt-2"
        href={"/pages"}
      >
        Read more <ArrowRightIcon className="ml-[4px]" />
      </Link>
    </div>
  );
};

export default Listcards;
