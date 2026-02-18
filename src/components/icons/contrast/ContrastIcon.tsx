/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Contrast from "./contrast.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ContrastIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Contrast className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
