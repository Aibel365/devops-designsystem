/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Settings from "./settings.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const SettingsIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Settings className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};