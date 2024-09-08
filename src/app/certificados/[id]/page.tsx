import DiplomaComponent from "@/components/DiplomaComponent";
import { getCertificate } from "@/lib/actions/certifications";
import { checkTestimony } from "@/lib/actions/testimony";
import { db } from "@/lib/db";
import { certifications } from "@/lib/db/schema/certifications";
import { PageParams } from "@/lib/types/params";
import { eq } from "drizzle-orm";

export type Certificate = AwaitedReturn<typeof getCertificate>;

export default async function Certificado({
  params: { id },
}: PageParams<{ id: string }>) {
  const certificado = await getCertificate(id);
  if (certificado == undefined) {
    return (
      <div className="h-screen flex justify-end items-center">
        El certificado no existe
      </div>
    );
  }
  const testimony = await checkTestimony(certificado.course_id);
  console.log(certificado);
  return (
    <div>
      <DiplomaComponent
        certificate={certificado}
        canCreate={testimony == undefined}
      />
      ;
    </div>
  );
}
