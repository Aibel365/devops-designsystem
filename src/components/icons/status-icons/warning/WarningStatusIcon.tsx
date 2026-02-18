/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import WarningStatus from "./warningStatus.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const WarningStatusIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <WarningStatus className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};