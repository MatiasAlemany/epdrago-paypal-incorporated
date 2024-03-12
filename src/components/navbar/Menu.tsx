"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  CalendarCheck,
  CircleUserRound,
  Flame,
  GraduationCap,
  Home,
  LogIn,
  LogOut,
  MenuIcon,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignIn, SignUp, useClerk, useSignIn, useSignUp } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

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
              <DropdownMenuItem
                onClick={() => {
                  setdialogOpen(true);
                }}
                className="hover:bg-neutral-900"
              >
                <LogIn className="mr-3  h-4 w-4" />
                Ingresar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setDialogRegisterOpen(true);
                }}
                className="hover:bg-neutral-900"
              >
                <CircleUserRound className="mr-3  h-4 w-4" />
                Registrarse
              </DropdownMenuItem>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={dialogRegisterOpen} onOpenChange={setDialogRegisterOpen}>
        <DialogContent className="bg-transparent border-none  px-0 flex justify-center">
          <SignUp />
        </DialogContent>
      </Dialog>
      <Dialog open={dialogOpen} onOpenChange={setdialogOpen}>
        <DialogContent className="bg-transparent border-none  px-0 flex justify-center">
          <SignIn />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Menu;
