/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ListAlt from "./listAlt.jsx.svg?react";

export const ListAltIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ListAlt
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
