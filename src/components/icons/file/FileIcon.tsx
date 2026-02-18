/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import FileSvg from "./fileSvg.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const FileIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <FileSvg className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};