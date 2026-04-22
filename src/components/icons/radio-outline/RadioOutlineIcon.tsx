/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import RadioOutline from "./radioOutline.jsx.svg?react";

export const RadioOutlineIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <RadioOutline
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
