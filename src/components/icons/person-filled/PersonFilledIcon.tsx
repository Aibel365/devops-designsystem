/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Person from "./person-fill.jsx.svg?react";

export const PersonFilledIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Person
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
