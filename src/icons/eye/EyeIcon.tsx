/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Eye from "./eye.jsx.svg?react";

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Eye
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
