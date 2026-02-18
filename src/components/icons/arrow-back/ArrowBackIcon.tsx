/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrowBack from "./arrowBack.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ArrowBackIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ArrowBack className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
