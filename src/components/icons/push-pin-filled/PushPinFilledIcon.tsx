/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import PushPinFilled from "./pushPinFilled.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const PushPinFilledIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <PushPinFilled className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};