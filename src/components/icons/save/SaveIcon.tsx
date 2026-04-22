/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Save from "./save.jsx.svg?react";

export const SaveIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Save
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
