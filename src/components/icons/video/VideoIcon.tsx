/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Video from "./video.jsx.svg?react";

export const VideoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Video
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
