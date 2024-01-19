"use client";

import { ModulePDFType } from "@/lib/db/schema/modules_items";
import { Button } from "@nextui-org/react";
import { CheckCircle } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";

const ModulePDF = ({ modulePDF }: { modulePDF: ModulePDFType }) => {
  useEffect(() => {
    setTimeout(() => {
      toast("Estas muy cerca de terminar el curso no te rindas!", {
        description: "De parte de Axel Dubin",
        action: {
          label: "Ok",
          onClick: () => console.log("Undo"),
        },
        classNames: {
          toast: "min-w-[400px] mr-40",
          title: "text-2xl font-bold",
        },
        duration: 10000,
      });
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="max-w-[1080px]">
        <h1 className="font-bold text-3xl pb-4 ">Modulo: {modulePDF.title}</h1>
      </div>
    </div>
  );
};

export default ModulePDF;
