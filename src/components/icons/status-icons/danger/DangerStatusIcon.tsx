/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import DangerStatus from "./dangerStatus.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const DangerStatusIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <DangerStatus className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};