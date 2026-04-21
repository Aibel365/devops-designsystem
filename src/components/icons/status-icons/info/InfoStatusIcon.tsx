/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import InfoStatus from "./infoStatus.jsx.svg?react";

export const InfoStatusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <InfoStatus
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
