/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrowBack from "./arrowBack.jsx.svg?react";

export const ArrowBackIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ArrowBack
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
