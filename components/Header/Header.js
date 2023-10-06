import {
  LinkedInLogoIcon,
  MoonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { DropdownMenuDemo } from "../Dropdown/Dropdown";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row w-full h-[10%] justify-between bg-background p-[1.5rem] px-[8rem] max-sm:px-[2rem]">
      <p className="max-sm:text-[12px]">/ Falah&lsquo;s blogs</p>
      <div className="hidden max-sm:block">
        <DropdownMenuDemo />
      </div>
      <div className="flex flex-row w-[12%] justify-between align-middle items-center max-sm:hidden">
        <Link href={"https://x.com/ffalah_"}>
          <TwitterLogoIcon />
        </Link>
        <Link href={"https://www.linkedin.com/in/mohammed-falah-a4a4b0223/"}>
          <LinkedInLogoIcon />
        </Link>
        <hr className="bg-secondary-foreground text-transparent w-[1px] h-[80%]" />
        <div className="h-full w-fit p-[4px] rounded-sm hover:bg-accent hover:cursor-pointer">
          {theme === "light" ? (
            <MoonIcon onClick={() => setTheme("dark")} />
          ) : (
            <SunIcon onClick={() => setTheme("light")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
