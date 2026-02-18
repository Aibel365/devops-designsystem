/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import UploadFile from "./uploadFile.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const UploadFileIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <UploadFile className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};