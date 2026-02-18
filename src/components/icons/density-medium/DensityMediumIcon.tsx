/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import DensityMedium from "./densityMedium.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const DensityMediumIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <DensityMedium
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
