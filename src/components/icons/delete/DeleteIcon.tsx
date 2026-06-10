/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Delete from "./delete.jsx.svg?react";

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Delete
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
