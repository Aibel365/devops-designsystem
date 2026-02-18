/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import UnfoldLess from "./unfoldLess.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const UnfoldLessIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <UnfoldLess
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
