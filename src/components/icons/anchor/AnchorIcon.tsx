/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Anchor from "./anchor.jsx.svg?react";

export const AnchorIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Anchor
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
