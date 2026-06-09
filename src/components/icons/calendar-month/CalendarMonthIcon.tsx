/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import CalendarMonth from "./calendarMonth.jsx.svg?react";

export const CalendarMonthIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CalendarMonth
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
