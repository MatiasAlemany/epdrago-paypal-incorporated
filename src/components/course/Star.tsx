import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const ratingIcons = {
  star: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  heart:
    "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
};

const starStyles = cva(
  ["cursor-pointer", "transition-all", "hover:scale-125", "ease-out"],
  {
    variants: {
      size: {
        small: "h-6 w-6",
        medium: "h-12 w-12",
        large: "h-16 w-16",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);

const iconStyles = cva("", {
  variants: {
    icon: ratingIcons,
  },
  defaultVariants: {
    icon: "star",
  },
});
export type IconStylesProps = VariantProps<typeof iconStyles>;
export type StarStylesProps = VariantProps<typeof starStyles>;

interface IconButtonProps extends StarStylesProps, IconStylesProps {
  value: number;
  currentStarsValue: number;
  alreadySelectedValue: boolean;
  changeStarValue: React.Dispatch<React.SetStateAction<number>>;
  setAlreadySelectedValue: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
  borderColor: string;
}

const Icon: React.FC<IconButtonProps> = ({
  size,
  changeStarValue,
  value,
  currentStarsValue,
  alreadySelectedValue,
  setAlreadySelectedValue,
  color,
  borderColor,
  icon,
}) => {
  return (
    <svg
      className={starStyles({ size })}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
    >
      <path stroke={borderColor} fill="rgb(0,0,0,0)" d={iconStyles({ icon })} />
      <clipPath id="icon">
        <path d={iconStyles({ icon })}></path>
      </clipPath>
      <rect
        onClick={() => {
          if (!alreadySelectedValue) {
            changeStarValue(value - 0.5);
            setAlreadySelectedValue(true);
          }
        }}
        onMouseEnter={() => {
          if (!alreadySelectedValue) {
            changeStarValue(value - 0.5);
          }
        }}
        x="0%"
        y="0"
        fill={currentStarsValue >= value - 0.5 ? color : "rgb(0,0,0,0)"}
        width="50%"
        height="100%"
        clipPath="url(#icon)"
      />
      <rect
        x="50%"
        y="0"
        onClick={() => {
          if (!alreadySelectedValue) {
            changeStarValue(value);
            setAlreadySelectedValue(true);
          }
        }}
        onMouseEnter={() => {
          if (!alreadySelectedValue) {
            changeStarValue(value);
          }
        }}
        fill={currentStarsValue >= value ? color : "rgb(0,0,0,0)"}
        width={"50%"}
        height="100%"
        clipPath="url(#icon)"
      />
    </svg>
  );
};

export default Icon;
