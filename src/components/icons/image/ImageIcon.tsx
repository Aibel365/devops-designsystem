/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import ImageSvg from "./imageSvg.jsx.svg?react";

export const ImageIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ImageSvg
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
