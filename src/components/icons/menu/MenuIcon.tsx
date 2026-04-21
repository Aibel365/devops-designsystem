/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Menu from "./menu.jsx.svg?react";

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Menu
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
