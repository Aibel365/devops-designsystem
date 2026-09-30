/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Pdf from "./pdf.jsx.svg?react";

export const PdfIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Pdf
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
