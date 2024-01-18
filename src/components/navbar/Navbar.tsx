import { cn } from "@/lib/utils";
import { Button, DropdownMenu } from "@nextui-org/react";
import { padding } from "../styles/padding";
import EpdragoIcon from "./EpdragoIcon";

import { MenuIcon } from "lucide-react";
import NavbarDialogs from "./NavbarDialogs";
import HorizontalProgressBar from "../course/HorizontalProgressBar";
import { CourseProgressContainer } from "./CourseProgressContainer";
import { currentUser } from "@clerk/nextjs/server";
import Menu from "./Menu";
import DrawerCourses from "./DrawerCourses";
import NavbarNavigationMenu from "./NavbarNavigationMenu";
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
  const user = await currentUser();
  return (
    <div className={cn("fixed w-full mt-0 md:mt-8 z-10", padding)}>
      <div className=" flex justify-between items-center ">
        <div className="h-24 w-24 flex-1 ">
          <EpdragoIcon />
        </div>
        <NavbarNavigationMenu>
          <div className="w-[400px] min-h-20 max-h-60 overflow-y-scroll px-2 py-4">
            <CourseProgressContainer />
          </div>
        </NavbarNavigationMenu>
        <div className="lg:hidden block">
          <DrawerCourses />
        </div>
        {user != null ? <SignOutButton /> : <NavbarDialogs />}

        <Menu />
        <div className="absolute h-screen w-88 bg-slate-800"></div>
      </div>
    </div>
  );
}
