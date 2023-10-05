"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Listcards = (props) => {
  return (
    <div className="hover:bg-slate-200 p-[1rem] h-fit rounded-md ml-[-1rem] transition duration-200 ease-in-out">
      <h1 className="font-semibold">{props.name}</h1>
      <p className="text-[14px] text-[#272727] py-1">{props.heading}</p>
      <Link
        className="flex align-middle w-fit items-center text-[12px] mt-2 text-gray-400 hover:text-[#272727]"
        href={`/blog/${props.path}`}
      >
        Read more <ArrowRightIcon className="ml-[4px]" />
      </Link>
    </div>
  );
};

export default Listcards;
