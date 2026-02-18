/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Search from "./search.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const SearchIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Search className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};