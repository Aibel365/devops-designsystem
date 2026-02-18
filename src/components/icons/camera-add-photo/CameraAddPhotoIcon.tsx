/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CameraAddPhoto from "./cameraAddPhoto.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const CameraAddPhotoIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <CameraAddPhoto className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};