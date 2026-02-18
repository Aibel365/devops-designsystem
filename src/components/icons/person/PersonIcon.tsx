/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Person from "./person.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const PersonIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Person className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};