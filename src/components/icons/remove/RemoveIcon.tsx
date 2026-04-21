/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Remove from "./remove.jsx.svg?react";

export const RemoveIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Remove
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
