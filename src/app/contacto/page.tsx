"use client";
import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";
import { Button, Divider } from "@nextui-org/react";
import { Flame, InstagramIcon, MailIcon } from "lucide-react";

const ContactoPage = () => {
  return (
    <div className={cn("min-h-screen py-40", padding)}>
      <div className="w-full bg-neutral-950 rounded-xl px-8 py-6">
        <div className="flex items-center mt-8">
          <h1 className="font-bold text-2xl tracking-wide  ">
            Epdrago - Contactos
          </h1>
        </div>

        <Divider className="w-full h-1 my-4 rounded-lg" />

        <div className="flex flex-col border border-neutral-500 p-4 rounded-md">
          <div className="flex items-center ">
            {" "}
            <InstagramIcon className="text-green-500" />
            <h1 className="font-bold text-xl tracking-wide ml-2 ">
              Instagrams
            </h1>
          </div>{" "}
          <div className="flex  flex-wrap justify-center md:justify-start">
            {" "}
            <Button className="mt-2" color="success" variant="bordered">
              <a
                href="https://www.instagram.com/epdrago?igsh=NmR3cmN6bXI4bzRw&utm_source=qr"
                className=""
              >
                Epdrago
              </a>
            </Button>
            <Button className="m-2 " color="success" variant="bordered">
              <a
                href="https://www.instagram.com/arii_st.workout?igsh=MTI5d211NXdmcWl4ag=="
                className=""
              >
                Ariel Cabrera
              </a>
            </Button>{" "}
            <Button className="mt-2" color="success" variant="bordered">
              <a
                href="https://www.instagram.com/axeel_dubin?igsh=Y3Z2b2dkZWQwYmJ2"
                className=""
              >
                Axel Dubin
              </a>
            </Button>
            <Button className="mt-2 ml-2" color="success" variant="bordered">
              <a
                href="https://www.instagram.com/leandrolioneldrago?igsh=MTJtdHFqcDNzZHl2MA%3D%3D&utm_source=qr"
                className=""
              >
                Leandro Drago
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col  mt-8 border border-neutral-500 p-4 rounded-md">
          <h1 className="font-bold tracking-wide text-xl flex">
            <Flame className="mr-2 text-green-500" /> Unite a la Epdrago Army!
          </h1>
          <div>
            <Button
              className="mt-2"
              size="lg"
              color="success"
              variant="bordered"
            >
              <a href="https://chat.whatsapp.com/DwIfVzARZJI8qKotekqDCj">
                Unirse ya!
              </a>
            </Button>
          </div>
        </div>
        <div className="border border-neutral-500 rounded-md mt-8 p-4 mb-8">
          <div className="flex items-center ">
            <MailIcon className="text-green-500" />
            <h1 className="font-bold text-xl tracking-wide ml-2 ">Email</h1>
          </div>
          <p className="text-xl text-neutral-400 mt-1">epdragocaba@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
