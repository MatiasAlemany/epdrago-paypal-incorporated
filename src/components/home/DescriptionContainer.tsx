import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionContainer = () => {
  return (
    <div className="mt-20">
      <DescriptionItem
        title="Equipo"
        description="Somos un equipo dedicado a las competencias,
        ensenanza y difusion de la calistenia y street workout
        Fundado en el 2020.
        "
      />
      <DescriptionItem
        orientation="right"
        title="Competencias"
        description="Epdrago Championship
        es una cometencia del mas
        alto nivel en Power Freestyle.
        Que utiliza un reglamento digital
        utilizado a nivel internacional, creado por
        Rodri Otrera."
      />
      <DescriptionItem
        title="Escuela"
        description="Nuestra escuela ofrece distintos metodos d
        de aprendizaje como cursos worskshops
        y capacitaciones con certificaciones
        oficiales avaladas por marcas y empresesas reconocidas"
      />
    </div>
  );
};

export default DescriptionContainer;
