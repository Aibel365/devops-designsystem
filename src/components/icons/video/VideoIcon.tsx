/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Video from "./video.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const VideoIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Video className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};