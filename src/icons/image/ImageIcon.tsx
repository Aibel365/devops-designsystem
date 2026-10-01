/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Image from "./image.jsx.svg?react";

export const ImageIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Image
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
