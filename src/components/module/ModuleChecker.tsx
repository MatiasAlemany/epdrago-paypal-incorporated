import { ModuleZod } from "@/lib/db/schema/modules_items";
import React from "react";
import ModuleVideo from "./ModuleVideo";
import ModulePDF from "./ModulePDF";
import { Module } from "module";
import ModuleQuestionary from "./ModuleQuestionary";
import { ModuleNavigationI } from "./ModuleNavigation";

const ModuleChecker = ({ moduleDB, }: { moduleDB: ModuleZod}) => {
  if (moduleDB.type == "pdf") {
    return <ModulePDF modulePDF={moduleDB} />;
  }
  if (moduleDB.type == "video") {
    return <ModuleVideo moduleVideo={moduleDB}  />;
  }
  if (moduleDB.type == "questionario") {
    return <ModuleQuestionary questionary_id={moduleDB.questionary_id!} />;
  }
  return <div>{}</div>;
};

export default ModuleChecker;
