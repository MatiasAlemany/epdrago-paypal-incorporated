import CarousellData from "@/components/home/CarousellData";
import CarousellHome from "@/components/home/CarousellHome";
import DescriptionContainer from "@/components/home/DescriptionContainer";
import FeaturesContainer from "@/components/home/FeaturesContainer";
import { padding } from "@/components/styles/padding";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("pt-36 flex flex-col px-20 pb-40", padding)}>
      <CarousellData />
      <FeaturesContainer />
      <div className="flex flex-col items-center mt-8 py-16 border-neutral-500 px-2 appear-from-bottom border rounded-lg">
        <h1 className="text-green-500 font-bold text-2xl lg:text-4xl text-center">
          ¿QUIENES SOMOS?
        </h1>
        <p className="max-w-[800px]  text-sm leading-7 lg:text-md text-center pt-8 ">
          Epdrago es un equipo de Calistenia y Street Workout con el objetivo de
          difundir la disciplina, y llevarla a todas partes del mundo. Nos
          encargamos de lograr este sueño, a través de la enseñanza, la
          capacitación, clases, promover la construcción de parques de barras en
          Argentina, realizar eventos, competencias, exhibiciones, y clases
          gratuitas en villas y barrios vulnerables, entre muchas cosas más. Hoy
          en día queremos lograr capacitar a la mayor cantidad de personas
          dentro del mundo de la Calistenia. Ofreciendo un curso de
          Instructorado, con todo lo necesario a saber dentro de la disciplina y
          el entrenamiento en general para que las personas pueden vivir de
          esto.
        </p>
      </div>
      <DescriptionContainer />
    </div>
  );
}
