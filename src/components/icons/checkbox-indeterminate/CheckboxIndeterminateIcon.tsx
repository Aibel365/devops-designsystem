/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CheckboxIndeterminate from "./checkboxIndeterminate.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const CheckboxIndeterminateIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <CheckboxIndeterminate
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
