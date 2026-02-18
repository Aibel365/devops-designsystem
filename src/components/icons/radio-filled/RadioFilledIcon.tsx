/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import RadioFilled from "./radioFilled.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const RadioFilledIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <RadioFilled className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};