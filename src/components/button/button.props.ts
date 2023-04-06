import { ReactNode } from "react";

export interface ButtonProps {
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
  children: ReactNode;
}
