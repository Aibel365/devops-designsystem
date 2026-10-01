/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import WorkTeam from "./workTeam.jsx.svg?react";

export const WorkTeamIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <WorkTeam
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
