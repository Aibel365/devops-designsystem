/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import InfoFilled from "./infoFilled.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const InfoIconFilled = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <InfoFilled className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};