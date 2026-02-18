/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CheckCircle from "./checkCircle.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const CheckCircleIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <CheckCircle className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};