"use client";
import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

const ContactoPage = () => {
  return (
    <div className={cn("min-h-screen pt-40", padding)}>
      <div className="h-[70vh] w-full bg-neutral-950 rounded-xl px-8 py-6">
        <h1 className="font-bold tracking-wide text-xl">EPDRAGO</h1>
        <h1 className="font-bold tracking-wide mt-2">
          Telefono - 11 6621 9348
        </h1>
        <h1 className="font-bold tracking-wide text-xl mt-4 ">INSTAGRAMS</h1>
        <div className="flex space-x-1">
          {" "}
          <Button className="mt-2" color="success" variant="bordered">
            @Epdrago
          </Button>
          <Button className="mt-2" color="success" variant="bordered">
            @Axel
          </Button>{" "}
          <Button className="mt-2" color="success" variant="bordered">
            @Epdrago
          </Button>
        </div>

        <div className="flex flex-col  mt-8">
          <h1 className="font-bold tracking-wide text-2xl">
            Unite a la Epdrago Army!
          </h1>
          <div>
            <Button
              className="mt-2"
              size="lg"
              color="success"
              variant="bordered"
            >
              Unirse ya!
            </Button>
          </div>
        </div>
        <h1 className="font-bold text-xl tracking-wide mt-8">
          Email -leri@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default ContactoPage;
