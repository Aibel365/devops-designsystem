/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import VerifiedUser from "./verifiedUser.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const VerifiedUserIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <VerifiedUser className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};