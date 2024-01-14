import { PageParams } from "@/lib/types/params";
import React from "react";

const CrearCuestionario = ({
  searchParams: { module_id },
}: PageParams<{}, { module_id: string }>) => {
  console.log(module_id);
  return <div>CrearCuestionario</div>;
};

export default CrearCuestionario;
