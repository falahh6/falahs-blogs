import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const data = [
  {
    heading: "All about web vitels",
    description: "web vites lorem epsum jsh sgs ysybshgvb gvsg svgsvgs the",
  },
  {
    heading: "All about web vitels",
    description: "web vites lorem epsum jsh sgs ysybshgvb gvsg svgsvgs the",
  },
  {
    heading: "All about web vitels",
    description:
      "web vites lorem epsum jsh sgs ysybshgvb gweb vites lorem epsum jsh sgs ysybshgvb gweb vites lorem epsum jsh sgs ysybshgvb gweb vites lorem epsum jsh sgs ysybshgvb gweb vites lorem epsum jsh sgs ysybshgvb gvsg svgsvgs the",
  },
];
