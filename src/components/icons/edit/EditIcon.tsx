/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Edit from "./edit.jsx.svg?react";

export const EditIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Edit
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
