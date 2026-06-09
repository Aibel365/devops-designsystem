/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import PdfSvg from "./pdfSvg.jsx.svg?react";

export const PdfIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <PdfSvg
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
