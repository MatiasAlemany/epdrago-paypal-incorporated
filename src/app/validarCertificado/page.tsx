"use client";
import { padding } from "@/components/styles/padding";
import { Button } from "@/components/ui/button";
import { verifyCertificate } from "@/lib/actions/certifications";
import { cn } from "@/lib/utils";
import { Input, Spinner } from "@nextui-org/react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { Certificate } from "../certificados/[id]/page";
export default function ValidarCertificado({}) {
  const [id, setid] = useState("");

  const [searched, setSearched] = useState(false);
  const { execute, status } = useAction(verifyCertificate, {
    onSuccess(data) {
      setSearched(true);
      setCertification(data);
    },
  });

  const [certification, setCertification] = useState<Certificate | undefined>();

  return (
    <div
      className={cn("h-screen flex flex-col justify-center items-center px-8")}
    >
      <h1 className="text-4xl mb-8 font-bold text-center">
        Validacion de certificado de curso
      </h1>
      <Input
        value={id}
        onChange={(e) => {
          setid(e.target.value);
        }}
        variant="bordered"
        label="Validar certificado"
        className="max-w-72 border-green-500 text-lg mb-4"
        color="success"
      />

      {status == "executing" ? (
        <Spinner color="success" />
      ) : (
        <Button
          onClick={async () => {
            execute({ id });
          }}
          color="green"
          variant="outline"
          className=""
        >
          Validar
        </Button>
      )}
      <div className="mt-2">
        {certification == undefined && searched ? (
          <h1 className="text-red-500">El certificado no es valido</h1>
        ) : (
          !!certification && (
            <h1 className="text-green-500">Certificado Valido!</h1>
          )
        )}
      </div>
    </div>
  );
}
