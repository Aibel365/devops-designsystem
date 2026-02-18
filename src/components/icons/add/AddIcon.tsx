/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Add from "./add.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const AddIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <Add className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
