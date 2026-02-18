/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import NotStartedStatus from "./notStartedStatus.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const NotStartedStatusIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <NotStartedStatus
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
