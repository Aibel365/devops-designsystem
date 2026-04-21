/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import AttachFile from "./barcodeScanner.jsx.svg?react";

export const BarcodeScannerIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <AttachFile
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
