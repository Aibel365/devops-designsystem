/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Redo from "./redo.jsx.svg?react";

export const RedoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Redo
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
