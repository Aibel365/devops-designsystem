/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrorDownward from "./arrowDownward.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ArrowDownwardIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ArrorDownward className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};