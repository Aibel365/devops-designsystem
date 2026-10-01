/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Home from "./home.jsx.svg?react";

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Home
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
