/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Remove from "./remove.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const RemoveIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Remove className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};