/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import MoveItem from "./moveItem.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
    className?: string;
};

export const MoveItemIcon = ({ size, className, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-${size}` : "ads:size-4";
    return (
        <MoveItem
            {...rest}
            className={`${sizeCss} ads:leading-0 ads:inline-block ${className || ""}`}
        />
    );
};
