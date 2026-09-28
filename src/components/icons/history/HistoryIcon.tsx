/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import History from "./history.jsx.svg?react";

export const HistoryIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <History
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
