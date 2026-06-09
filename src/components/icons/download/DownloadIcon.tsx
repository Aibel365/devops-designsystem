/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Download from "./download.jsx.svg?react";

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Download
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
