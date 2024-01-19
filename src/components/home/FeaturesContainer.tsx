import { BookText, Flame, Shield } from "lucide-react";
import FeatureContainer from "./FeatureContainer";

const FeaturesContainer = () => {
  return (
    <div className="flex flex-wrap feature-animation justify-center mt-10">
      <FeatureContainer
        title="Estudiantes"
        content="Tenemos mas de 10000 estudiantes en varios paises del mundo"
        icon={<BookText className="text-green-500 w-8 h-8" />}
      />
      <FeatureContainer
        title="Seguridad"
        content="Tenemos mas de 10000 estudiantes en varios paises del mundo"
        icon={<Shield className="text-green-500 w-8 h-8" />}
      />

      <FeatureContainer
        title="Marcas"
        content="Tenemos mas de 10000 estudiantes en varios paises del mundo"
        icon={<Flame className="text-green-500 w-8 h-8" />}
      />
    </div>
  );
};

export default FeaturesContainer;
