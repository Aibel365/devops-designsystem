/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import InfoFilled from "./infoFilled.jsx.svg?react";

export const InfoIconFilled = (props: SVGProps<SVGSVGElement>) => {
    return (
        <InfoFilled
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
