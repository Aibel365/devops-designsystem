/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import MoreVert from "./moreVert.jsx.svg?react";

export const MoreVertIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <MoreVert
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
