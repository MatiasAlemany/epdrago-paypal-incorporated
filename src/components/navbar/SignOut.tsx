"use client";
import { useClerk } from "@clerk/nextjs";
import { CircleUserRound, LogOut } from "lucide-react";
import React from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const SignOut = () => {
  const { signOut } = useClerk();

  return (
    <DropdownMenuItem
      onClick={() => {
        signOut();
      }}
      className="hover:bg-neutral-900 text-red-400"
    >
      <LogOut className="mr-3  h-4 w-4 text-red-400" />
      Salir
    </DropdownMenuItem>
  );
};

export default SignOut;
