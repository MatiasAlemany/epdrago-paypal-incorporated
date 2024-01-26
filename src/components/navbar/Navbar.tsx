import { cn } from "@/lib/utils";
import { padding } from "../styles/padding";
import EpdragoIcon from "./EpdragoIcon";

import NavbarDialogs from "./NavbarDialogs";
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
          {user == null ? (
            <div></div>
          ) : (
            <div className="w-[400px] min-h-20 max-h-60 overflow-y-scroll px-2 py-4">
              <CourseProgressContainer userId={user.id} />
            </div>
          )}
        </NavbarNavigationMenu>
        <div className="lg:hidden block">
          {user == null ? <div></div> : <DrawerCourses userId={user.id} />}
        </div>
        {user != null ? (
          <SignOutButton />
        ) : (
          <div className="lg:block hidden">
            <NavbarDialogs />
          </div>
        )}

        <Menu userId={user == null ? null : user.id} />
        <div className="absolute h-screen w-88 bg-slate-800"></div>
      </div>
    </div>
  );
}
