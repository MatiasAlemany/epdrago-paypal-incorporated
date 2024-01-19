"use client";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SignIn, SignUp } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const NavbarDialogs = () => {
  const [dialogOpen, setdialogOpen] = useState(false);
  const [dialogRegisterOpen, setDialogRegisterOpen] = useState(false);
  return (
    <div className="flex">
      <div>
        <Dialog open={dialogOpen} onOpenChange={setdialogOpen}>
          <DialogTrigger>
            <Button
              className="mx-2"
              color="success"
              onClick={() => {
                setdialogOpen(true);
              }}
            >
              Registrarse
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none  px-0 flex justify-center">
            <SignUp />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Dialog open={dialogRegisterOpen} onOpenChange={setDialogRegisterOpen}>
          <DialogTrigger>
            <Button
              className="mr-2"
              variant="bordered"
              onClick={() => {
                setDialogRegisterOpen(true);
              }}
            >
              Ingresar
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none  px-0 flex justify-center">
            <SignIn />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default NavbarDialogs;
