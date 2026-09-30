/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Settings from "./settings.jsx.svg?react";

export const SettingsIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Settings
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
