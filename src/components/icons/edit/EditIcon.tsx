/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Edit from "./edit.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const EditIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <Edit
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
