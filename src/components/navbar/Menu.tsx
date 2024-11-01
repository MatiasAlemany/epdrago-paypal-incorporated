"use client";

import { cn } from "@/lib/utils";
import { SignIn, SignInButton, SignUp, SignUpButton } from "@clerk/nextjs";
import {
  CalendarCheck,
  CircleUserRound,
  GraduationCap,
  Home,
  LogIn,
  LogInIcon,
  MenuIcon,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import SignOut from "./SignOut";

const Menu = ({ userId }: { userId: string | null }) => {
  const [dialogOpen, setdialogOpen] = useState(false);
  const [dialogRegisterOpen, setDialogRegisterOpen] = useState(false);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={cn(" lg:hidden")}>
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-6 w-44">
          <DropdownMenuLabel>Epdrago Web</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Home className="mr-3  h-4 w-4" />
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-neutral-900">
            <GraduationCap className="mr-3  h-4 w-4" />
            <Link href="/cursos">Cursos</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-neutral-900">
            <Phone className="mr-3  h-4 w-4" />
            <Link href="/contacto">Contacto</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-neutral-900">
            <CalendarCheck className="mr-3  h-4 w-4" />
            <Link href="/eventos">Eventos</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {userId ? (
            <SignOut />
          ) : (
            <div className="flex flex-col">
              {" "}
              <SignInButton mode="modal">
                <DropdownMenuItem className="hover:bg-neutral-900">
                  <LogInIcon className="mr-3  h-4 w-4" />
                  Ingresar
                </DropdownMenuItem>
              </SignInButton>
              <SignUpButton mode="modal">
                <DropdownMenuItem className="hover:bg-neutral-900 text-green-400">
                  <CircleUserRound className="mr-3  h-4 w-4" />
                  Registrarse
                </DropdownMenuItem>
              </SignUpButton>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;
