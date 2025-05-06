import React from "react";
import styles from "./Icon.module.css";

interface IconProps {
  paths: string[];
  strokeWidth?: number;
  strokeLinecap?: "round" | "butt" | "square" | "inherit";
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel";
}

export default function Icon({
  paths,
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: IconProps) {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    >
      {paths.map((path, index) => (
        <path key={index} d={path}></path>
      ))}
    </svg>
  );
}
