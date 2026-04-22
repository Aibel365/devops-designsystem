/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Close from "./close.jsx.svg?react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Close
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
