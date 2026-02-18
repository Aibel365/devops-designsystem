/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Close from "./close.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const CloseIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Close className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};