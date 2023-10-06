"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Listcards = (props) => {
  return (
    <div className="p-[1rem] h-fit rounded-md ml-[-1rem] transition duration-200 ease-in-out hover:bg-accent">
      <h1 className="font-medium">{props.name}</h1>
      <p className="text-[14px] text-foreground py-1">{props.heading}</p>
      <Link
        className="flex align-middle w-fit items-center text-[12px] mt-2 text-muted-foreground hover:text-popover-foreground"
        href={`/${props.path}`}
      >
        Read more <ArrowRightIcon className="ml-[4px]" />
      </Link>
    </div>
  );
};

export default Listcards;
