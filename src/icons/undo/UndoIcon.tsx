/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Undo from "./undo.jsx.svg?react";

export const UndoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Undo
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
