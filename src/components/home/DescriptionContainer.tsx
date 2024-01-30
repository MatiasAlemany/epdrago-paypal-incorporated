import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-20 space-x-24">
        <div className="h-[381px] w-[451px] flex-col p-8 main-content rounded-2xl">
          <h1 className="text-2xl font-extrabold tracking-wide">EQUIPO</h1>
          <p className="mt-6">
            La mejor aplicación de calistenia. Rutinas, programas de
            entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
            vídeos explicativos y más. En la versión gratuita podrás disfrutar
            de más de 150 rutinas de todo tipo. Cada mes añadimos nuevas
            rutinas, contenido y funcionalidades.
          </p>
        </div>
        <div className="h-[381px] w-[451px] flex-col p-8 main-content rounded-2xl">
          <h1 className="text-2xl font-extrabold tracking-wide">COMPETENCIAS</h1>
          <p className="mt-6">
            La mejor aplicación de calistenia. Rutinas, programas de
            entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
            vídeos explicativos y más. En la versión gratuita podrás disfrutar
            de más de 150 rutinas de todo tipo. Cada mes añadimos nuevas
            rutinas, contenido y funcionalidades.
          </p>
        </div>
      </div>
      <div className="flex mt-20 space-x-24">
        <div className="h-[381px] w-[451px] flex-col p-8 main-content rounded-2xl">
          <h1 className="text-2xl font-extrabold tracking-wide">TRAYECTORIA</h1>
          <p className="mt-6">
            La mejor aplicación de calistenia. Rutinas, programas de
            entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
            vídeos explicativos y más. En la versión gratuita podrás disfrutar
            de más de 150 rutinas de todo tipo. Cada mes añadimos nuevas
            rutinas, contenido y funcionalidades.
          </p>
        </div>
        <div className="h-[381px] w-[451px] flex-col p-8 main-content rounded-2xl">
          <h1 className="text-2xl font-extrabold tracking-wide">INSTAGRAM</h1>
          <p className="mt-6">
            La mejor aplicación de calistenia. Rutinas, programas de
            entrenamiento, desafíos mensuales, rutinas inteligentes, artículos,
            vídeos explicativos y más. En la versión gratuita podrás disfrutar
            de más de 150 rutinas de todo tipo. Cada mes añadimos nuevas
            rutinas, contenido y funcionalidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContainer;
