/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Check from "./check.svg?react";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Check
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
