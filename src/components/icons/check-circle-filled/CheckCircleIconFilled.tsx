/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CheckCircleFilled from "./checkCircleFilled.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const CheckCircleIconFilled = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <CheckCircleFilled className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
