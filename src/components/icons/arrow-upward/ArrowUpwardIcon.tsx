/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrowUpward from "./arrowUpward.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ArrowUpwardIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ArrowUpward className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};