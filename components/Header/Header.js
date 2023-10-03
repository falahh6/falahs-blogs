import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row w-full h-[10%] justify-between bg-white p-[1.5rem]">
      <p className="">/ Falah&lsquo;s blogs</p>
      <div className="flex flex-row w-[5%] justify-between">
        <Link href={"https://x.com/ffalah_"}>
          <TwitterLogoIcon />
        </Link>
        <Link href={"https://www.linkedin.com/in/mohammed-falah-a4a4b0223/"}>
          <LinkedInLogoIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
