/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Cable from "./cable.jsx.svg?react";

export const CableIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Cable
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
