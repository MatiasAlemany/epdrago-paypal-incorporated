import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button, DropdownMenu } from "@nextui-org/react";
import Link from "next/link";
import { padding } from "../styles/padding";
import EpdragoIcon from "./EpdragoIcon";

import { MenuIcon } from "lucide-react";
import NavbarDialogs from "./NavbarDialogs";
import { getProgress } from "@/lib/actions/get_progress";
import HorizontalProgressBar from "../course/HorizontalProgressBar";
import { CourseProgressContainer } from "./CourseProgressContainer";
import { currentUser } from "@clerk/nextjs/server";
import Menu from "./Menu";
import DrawerCourses from "./DrawerCourses";

export default async function Navbar() {
  const user = await currentUser();
  return (
    <div className={cn("fixed w-full mt-8 z-10", padding)}>
      <div className=" flex justify-between items-center ">
        <div className="h-24 w-24 flex-1 ">
          <EpdragoIcon />
        </div>
        <div className="hidden lg:flex ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="bg-transparent">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50  dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cursos" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50  dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50">
                    Cursos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Mis Cursos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] min-h-20 max-h-60 overflow-y-scroll px-2 py-4">
                    <CourseProgressContainer />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contacto">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50  dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50">
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/eventos">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100/50 data-[state=open]:bg-zinc-100/50  dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50 dark:data-[active]:bg-zinc-800/50 dark:data-[state=open]:bg-zinc-800/50">
                    Eventos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="lg:hidden block">
          <DrawerCourses />
        </div>
        {user != null ? (
          <Button variant="bordered" className="mx-2  lg:block hidden">
            Salir
          </Button>
        ) : (
          <NavbarDialogs />
        )}

        <Menu />
        <div className="absolute h-screen w-88 bg-slate-800"></div>
      </div>
    </div>
  );
}
