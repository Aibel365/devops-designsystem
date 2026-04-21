/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import DarkMode from "./darkMode.jsx.svg?react";

export const DarkModeIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <DarkMode
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
