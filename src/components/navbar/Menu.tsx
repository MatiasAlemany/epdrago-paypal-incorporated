"use client";

import React from "react";
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
  Flame,
  GraduationCap,
  Home,
  LogOut,
  MenuIcon,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
const Menu = () => {
  const { signOut } = useClerk();

  const router = useRouter();

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
          <DropdownMenuItem
            onClick={() => {
              signOut(() => router.push("/"));
            }}
            className="hover:bg-neutral-900  cursor-pointer"
          >
            <LogOut className="mr-3  h-4 w-4 text-red-500" />
            <h1 className="text-red-500">Salir</h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;
