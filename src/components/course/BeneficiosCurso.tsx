import React from "react";

interface BeneficiosCursoProps {
  content: string;
}

const BeneficiosCurso: React.FC<BeneficiosCursoProps> = ({ content }) => {
  return (
    <div className="fade-in-view py-8">
      {" "}
      <h1 className="mt-8 text-center text-2xl font-bold lg:text-4xl text-green-400">
        Beneficios del curso
      </h1>
      <h1 className="mx-auto mt-2 max-w-5xl px-8 py-4 text-center text-text md:px-16 lg:px-32 text-neutral-300">
        {content}
      </h1>
    </div>
  );
};

export default BeneficiosCurso;
