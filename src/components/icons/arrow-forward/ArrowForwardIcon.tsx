/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrowForward from "./arrowForward.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ArrowForwardIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ArrowForward className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};