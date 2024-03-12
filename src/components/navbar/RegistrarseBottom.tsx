"use client";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SignIn, SignUp } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const RegistrarseBottom = () => {
  const [dialogOpen, setdialogOpen] = useState(false);
  const [dialogRegisterOpen, setDialogRegisterOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div>
        <Dialog open={dialogOpen} onOpenChange={setdialogOpen}>
          <DialogTrigger asChild>
            <button className="rounded-full px-8 text-black mt-6 mx-auto py-2 font-bold bg-green-500">
              REGISTRARSE
            </button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none  px-0 flex justify-center">
            <SignUp />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RegistrarseBottom;
