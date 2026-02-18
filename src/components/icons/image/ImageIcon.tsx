/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ImageSvg from "./imageSvg.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const ImageIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <ImageSvg className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};