/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Checkbox from "./checkbox.jsx.svg?react";

export const CheckboxIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Checkbox
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
