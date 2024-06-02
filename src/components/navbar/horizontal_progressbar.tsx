import React from "react";
import styles from "./components.module.css";
import { twMerge } from "tailwind-merge";
interface HorizontalProgressBarProps {
  percentage: number;
  color: string;
  percentageColor: string;
}

const HorizontalProgressBar: React.FC<HorizontalProgressBarProps> = ({
  percentage,
  color,
  percentageColor,
}) => {
  return (
    <div className=" relative mt-2 h-3">
      <div className="flex flex-row items-center">
        <div
          style={{
            width: 200 * (percentage / 100),
            backgroundColor: percentageColor,
          }}
          className={twMerge("absolute  h-2 rounded-xl transition-all")}
        >
          <div
            style={{ "--barcolor": percentageColor } as React.CSSProperties}
            className={twMerge("relative h-2 rounded-xl ", styles.bar)}
          />
        </div>
        <div className="h-2 w-[200px] rounded-xl bg-slate-800" />
        <h1
          style={{ color: percentageColor }}
          className={`pl-2 text-xs font-bold `}
        >
          {percentage}%
        </h1>
      </div>
    </div>
  );
};

export default HorizontalProgressBar;
