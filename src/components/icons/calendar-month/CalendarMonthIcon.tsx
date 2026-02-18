/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CalendarMonth from "./calendarMonth.jsx.svg?react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
}

export const CalendarMonthIcon = ({size, ...rest}: IconSvgProps) => {
    const sizeCss = size ? `ads:size-[${size}px]` : 'ads:size-4';
    return <CalendarMonth className={`${sizeCss} ads:leading-0 ads:inline-block`} {...rest} />;    
};
