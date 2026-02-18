/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import SwitchAccount from "./switchAccount.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const SwitchAccountIcon = ({ size, ...rest }: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : "ads:size-4";
    return (
        <SwitchAccount
            className={`${sizeCss} ads:leading-0 ads:inline-block`}
            {...rest}
        />
    );
};
