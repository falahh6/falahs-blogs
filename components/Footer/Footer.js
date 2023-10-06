import Link from "next/link";
import { FeedbackDailog } from "../Dialog/Dialog";
const Footer = () => {
  return (
    <div className="border border-t-2 w-full px-[8rem] max-sm:px-[1rem] h-[3rem] flex flex-row items-center text-[14px] justify-between">
      <p>
        Made by{" "}
        <Link href={"https://falahh.me"} target="_blank" className="underline">
          Falah
        </Link>
      </p>
      <FeedbackDailog />
    </div>
  );
};

export default Footer;
