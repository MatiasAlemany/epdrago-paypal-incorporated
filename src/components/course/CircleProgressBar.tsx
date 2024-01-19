"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HorizontalProgressBar from "./HorizontalProgressBar";
interface CircleProgressBarProps {
  finalPercentage: number;
  circleWidth: number;
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({
  finalPercentage,
  circleWidth,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const radius = 20;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  useEffect(() => {
    setTimeout(() => {
      setPercentage(finalPercentage);
    }, 400);
  }, [finalPercentage]);

  return (
    <motion.div className="wrap relative">
      <div
        className=" cursor-pointer flex justify-center"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="5px"
            style={{ fill: "none", stroke: "#464646" }}
            r={radius}
          />

          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="5px"
            className=" transition-all duration-500 ease-out"
            r={radius}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              stroke: "rgb(187, 0, 224)",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-0 right-0 top-0 bottom-0 m-auto h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      </div>
      {openMenu && (
        <motion.div
          initial={{ opacity: 0, top: 40 }}
          animate={{ opacity: 1, top: "56px" }}
          className={`r-100  absolute  w-[300px] rounded-lg bg-slate-900 px-4 py-4 `}
        >
          <h1 className=" text-xl font-bold">Curso entrenador</h1>
          <h1 className=" text-sm text-gray-500">Vamos ya falta poco!</h1>
          <HorizontalProgressBar percentage={0.5} thickness={8} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default CircleProgressBar;
