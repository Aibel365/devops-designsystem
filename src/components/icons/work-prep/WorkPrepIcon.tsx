/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import WorkPrep from "./work-prep.jsx.svg?react";

export const WorkPrepIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <WorkPrep
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
