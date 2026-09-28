/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import LinkUrl from "./link-url.jsx.svg?react";

export const LinkUrlIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <LinkUrl
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
