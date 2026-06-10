/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Add from "./add.jsx.svg?react";

export const AddIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Add
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
