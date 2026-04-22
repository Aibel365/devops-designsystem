/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import CheckboxIndeterminate from "./checkboxIndeterminate.jsx.svg?react";

export const CheckboxIndeterminateIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <CheckboxIndeterminate
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
