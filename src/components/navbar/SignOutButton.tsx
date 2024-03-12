"use client";
import { useClerk } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await signOut(() => {
          router.refresh();
          router.push("/");
        });
      }}
      variant="bordered"
      className="mx-2  lg:block hidden"
    >
      Salir
    </Button>
  );
};

export default SignOutButton;
