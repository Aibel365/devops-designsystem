/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ExpandLess from "./expandLess.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ExpandLessIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ExpandLess className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};