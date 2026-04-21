/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ViewWeek from "./viewWeek.jsx.svg?react";

export const ViewWeekIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ViewWeek
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
