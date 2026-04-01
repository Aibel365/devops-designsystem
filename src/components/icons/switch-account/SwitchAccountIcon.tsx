/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import SwitchAccount from "./switchAccount.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
    className?: string;
};

export const SwitchAccountIcon = ({ size, className, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-${size}` : "ads:size-4";
    return (
        <SwitchAccount
            {...rest}
            className={`${sizeCss} ads:leading-0 ads:inline-block ${className || ""}`}
        />
    );
};
