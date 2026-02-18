/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import FilterList from "./filterList.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const FilterListIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <FilterList className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};