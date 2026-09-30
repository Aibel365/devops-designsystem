/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Trash from "./trash.jsx.svg?react";

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Trash
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
