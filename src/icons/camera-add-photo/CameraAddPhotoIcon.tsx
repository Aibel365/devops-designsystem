/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import CameraAddPhoto from "./cameraAddPhoto.jsx.svg?react";

export const CameraAddPhotoIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CameraAddPhoto
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
