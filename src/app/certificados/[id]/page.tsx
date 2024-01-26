import { padding } from "@/components/styles/padding";
import { db } from "@/lib/db";
import { certifications } from "@/lib/db/schema/certifications";
import { PageParams } from "@/lib/types/params";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";

export default async function Certificado({
  params: { id },
}: PageParams<{ id: string }>) {
  const certificado = (await db.query.certifications.findFirst({
    where: eq(certifications.id, id),
    with: {
      course: true,
      user: true,
    },
  }))!;

  return (
    <div className={cn("pt-40 h-screen", padding)}>
      Certificado
      <h1 className=""> id : {id}</h1>
      <p> {certificado.course_id}</p>
      <p>Nombre: {certificado.user.name}</p>
      <p>Curso: {certificado.course.title}</p>
    </div>
  );
}
