/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Person from "./person.jsx.svg?react";

export const PersonIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Person
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
