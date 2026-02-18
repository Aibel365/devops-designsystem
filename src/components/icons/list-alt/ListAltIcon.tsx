/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ListAlt from "./listAlt.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ListAltIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ListAlt className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};