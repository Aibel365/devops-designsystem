/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Template from "./template.jsx.svg?react";

export const TemplateIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Template
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
