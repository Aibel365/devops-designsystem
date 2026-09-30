/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import UploadFile from "./uploadFile.jsx.svg?react";

export const UploadFileIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <UploadFile
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
