/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Delete from "./delete.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const DeleteIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Delete className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
