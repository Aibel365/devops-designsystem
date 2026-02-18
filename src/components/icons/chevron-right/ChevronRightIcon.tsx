/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ChevronRight from "./chevronRight.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ChevronRightIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ChevronRight className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
