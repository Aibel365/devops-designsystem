/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import CollapseSidebarRight from "./collapse-sidebar-right.jsx.svg?react";

export const CollapseSidebarRightIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CollapseSidebarRight
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
