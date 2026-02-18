/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ArrowDropdown from "./arrowDropDown.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const ArrowDropDownIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <ArrowDropdown
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
