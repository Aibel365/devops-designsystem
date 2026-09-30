/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import HubApps from "./hubApps.jsx.svg?react";

export const HubAppsIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <HubApps
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
