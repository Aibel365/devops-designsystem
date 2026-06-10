/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import PushPinFilled from "./pushPinFilled.jsx.svg?react";

export const PushPinFilledIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <PushPinFilled
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
