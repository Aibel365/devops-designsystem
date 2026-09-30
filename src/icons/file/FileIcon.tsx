/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import File from "./file.jsx.svg?react";

export const FileIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <File
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
