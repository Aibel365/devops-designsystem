/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import FileSvg from "./fileSvg.jsx.svg?react";

export const FileIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <FileSvg
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
