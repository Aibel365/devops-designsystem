/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Contrast from "./contrast.jsx.svg?react";

export const ContrastIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Contrast
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
