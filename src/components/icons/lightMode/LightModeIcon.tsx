/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import LightMode from "./lightMode.jsx.svg?react";

export const LightModeIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <LightMode
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
