/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Checkbox from "./checkbox.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const CheckboxIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Checkbox className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
