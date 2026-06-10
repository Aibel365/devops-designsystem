/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Description from "./description.jsx.svg?react";

export const DescriptionIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Description
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
