/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import VisibilityOff from "./visibilityOff.jsx.svg?react";

export const VisibilityOffIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <VisibilityOff
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
