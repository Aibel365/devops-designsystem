/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import GroupBy from "./groupBy.jsx.svg?react";

export const GroupByIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <GroupBy
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
