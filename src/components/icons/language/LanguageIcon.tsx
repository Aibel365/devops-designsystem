/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Language from "./language.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const LanguageIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Language className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};