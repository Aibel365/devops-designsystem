/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ExpandMore from "./expandMore.jsx.svg?react";

export const ExpandMoreIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ExpandMore
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
