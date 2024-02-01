import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionContainer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-32">
      {" "}
      <DescriptionItem
        title="Equipo"
        description="  La mejor aplicación de calistenia. Rutinas, programas de
          entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
          vídeos explicativos y más. En la versión gratuita podrás disfrutar de
          más de 150 rutinas de todo tipo. Cada mes añadimos nuevas rutinas,
          contenido y funcionalidades."
      />{" "}
      <DescriptionItem
        title="Equipo"
        description="  La mejor aplicación de calistenia. Rutinas, programas de
        entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
        vídeos explicativos y más. En la versión gratuita podrás disfrutar de
        más de 150 rutinas de todo tipo. Cada mes añadimos nuevas rutinas,
        contenido y funcionalidades."
      />{" "}
      <DescriptionItem
        title="Equipo"
        description="  La mejor aplicación de calistenia. Rutinas, programas de
      entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
      vídeos explicativos y más. En la versión gratuita podrás disfrutar de
      más de 150 rutinas de todo tipo. Cada mes añadimos nuevas rutinas,
      contenido y funcionalidades."
      />
    </div>
  );
};

export default DescriptionContainer;
