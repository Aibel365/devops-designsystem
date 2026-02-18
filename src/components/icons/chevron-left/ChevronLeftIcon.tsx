/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ChevronLeft from "./chevronLeft.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ChevronLeftIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ChevronLeft className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
