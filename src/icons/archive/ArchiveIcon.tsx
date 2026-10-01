/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Archive from "./archive.jsx.svg?react";

export const ArchiveIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Archive
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
