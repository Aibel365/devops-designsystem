/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Filter from "./filter.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const FilterIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Filter className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};