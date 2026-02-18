/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import InProgressStatus from "./inProgressStatus.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const InProgressStatusIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <InProgressStatus className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};