import { BookText } from "lucide-react";

const FeatureContainer = () => {
  return (
    <div className="w-[250px] px-8 py-6 mt-4 rounded-xl bg-neutral-900  flex flex-col items-center mx-4">
      <BookText className="text-green-500" />
      <h1 className="font-bold text-lg mt-4 ">Estudiantes</h1>
      <h2 className="text-center text-neutral-400 mt-2 text-sm">
        Tenemos mas de 10000 estudiantes en varios paises del mundo
      </h2>
    </div>
  );
};

export default FeatureContainer;
