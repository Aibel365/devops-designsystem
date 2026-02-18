/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CheckboxOutline from "./checkboxOutline.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const CheckboxOutlineIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <CheckboxOutline
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
