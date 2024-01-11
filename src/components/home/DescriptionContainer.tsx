import React from "react";
import DescriptionItem from "./DescriptionItem";

const DescriptionContainer = () => {
  return (
    <div className="mt-20">
      <DescriptionItem
        title="Quienes somos"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in th"
      />
      <DescriptionItem
        orientation="right"
        title="Equipo"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in th"
      />
      <DescriptionItem
        title="Eventos"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in th"
      />
    </div>
  );
};

export default DescriptionContainer;
