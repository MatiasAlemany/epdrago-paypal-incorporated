"use client";
import { Button, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { ModuleNavigationI } from "./ModuleNavigation";

type ButtonAsyncProps<T> = {
  onClick: (navigationTimeline: T) => Promise<void>;
  title: string;
  argument: T;
};

function ButtonAsync<T>({ onClick, title, argument }: ButtonAsyncProps<T>) {
  const [handling, setHandling] = useState(false);

  if (handling) {
    return <Spinner color="success" />;
  }
  return (
    <Button
      color="success"
      onClick={async () => {
        setHandling(true);
        await onClick(argument);
        setHandling(false);
      }}
    >
      {title}
    </Button>
  );
}

export default ButtonAsync;
