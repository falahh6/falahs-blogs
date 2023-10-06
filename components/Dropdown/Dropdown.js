import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HamburgerMenuIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export function DropdownMenuDemo() {
  const { theme, setTheme } = useTheme("light");

  return (
    <DropdownMenu className="hidden">
      <DropdownMenuTrigger asChild>
        <HamburgerMenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-30 mr-[2rem]">
        <DropdownMenuLabel>Follow</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"https://x.com/ffalah_"} className="flex items-center">
              <TwitterLogoIcon className="mr-2 h-4 w-4" />
              <span>Twitter</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"https://www.linkedin.com/in/mohammed-falah-a4a4b0223/"}
              className="flex items-center"
            >
              <LinkedInLogoIcon className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {theme === "light" ? (
                <SunIcon className="mr-2 h-4 w-4" />
              ) : (
                <MoonIcon className="mr-2 h-4 w-4" />
              )}
              <span>Mode</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <SunIcon className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <MoonIcon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
