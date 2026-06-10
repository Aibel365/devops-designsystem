/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Language from "./language.jsx.svg?react";

export const LanguageIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Language
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
