import { BookText, Flame, LineChart, Shield } from "lucide-react";
import FeatureContainer from "./FeatureContainer";

const FeaturesContainer = () => {
  return (
    <div className="flex flex-wrap feature-animation justify-center mt-10">
      <FeatureContainer
        title="Estudiantes"
        content="Tenemos mas de 1000 instructores formados con nosotros."
        icon={<BookText className="text-green-500 w-8 h-8" />}
      />
      <FeatureContainer
        title="Trayectoria"
        content="Tenemos mas de 10 años de experiencia en la enseñanza de Calistenia."
        icon={<LineChart className="text-green-500 w-8 h-8" />}
      />

      <FeatureContainer
        title="Marcas"
        content="Nos respaldan marcas y empresas que confian en nuestro trabajo."
        icon={<Shield className="text-green-500 w-8 h-8" />}
      />
    </div>
  );
};

export default FeaturesContainer;
