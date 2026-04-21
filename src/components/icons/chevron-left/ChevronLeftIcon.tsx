/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ChevronLeft from "./chevronLeft.jsx.svg?react";

export const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ChevronLeft
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
