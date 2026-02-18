/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Save from "./save.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const SaveIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Save className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};