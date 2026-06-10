/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import PushPin from "./pushPin.jsx.svg?react";

export const PushPinIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <PushPin
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
