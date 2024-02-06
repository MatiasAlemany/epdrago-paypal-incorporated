import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionContainer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-32">
      {" "}
      <DescriptionItem
        title="Equipo"
        description="
      Somos un equipo profesional de Calistenia y Street workout con más de 8 años de experiencia, nos dedicamos al desarrollo y difusión de la disciplina y tambien formamos instructores e instructoras, ya sea, para salir al campo laboral o para ser atleta.
      "
      />{" "}
      <DescriptionItem
        title="INSTAGRAM"
        description="Contenido diario, videos de ejercicios, testimonios de nuestros instructores graduados, información de nuestros cursos, competencias del mas alto nivel, trayectoria de la marca registrada Epdrago desde sus comienzos hasta la actualidad"
      />{" "}
      <DescriptionItem
        title="EPDRAGO ARMY"
        description="Comunidad de Calistenia activa en la cal compartimos contenido 100% calistenico, como: rutinas, tips, videos, progresos, información de competencias, juntadas, eventos y mucho más."
      />
      <DescriptionItem
        title="CURSOS"
        description="Nuestros cursos comienzan desde cero, es decir que no hay que tener ningun conocimiento previo para poder hacerlos. ofrecemos cursos de formacion profesional y cursos intensivos, todos con salida laboral garantizada"
      />
      <DescriptionItem
        title="CLASES"
        description="Nuestras clases de Calistenia son para todos los niveles generos y edades, nuestros profesores estan completamente capacitados para poder brindarte el mejor servicio teniendo en cuenta la condición fisíca en la que te encontras, trabajando 100% con el peso de tu propio cuerpo."
      />
      <DescriptionItem
        title="COMPETENCIAS"
        description="Somos organizadores de las competencias más importantes del país en las cuales ya debutaron más de 300 atletas de todos los generos y edades, viviendo una experiencia uníca demostrando su nivel para llegar a los primeros puestos del podío.
        Nuestra competencia mas importante es la 'Epdrago Championship' - Powerfreestyle, la cual ya tiene más de 4 años de trayectoria con la participación de atletas internacionales."
      />
    </div>
  );
};

export default DescriptionContainer;
