/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import ShieldPerson from "./shieldPerson.jsx.svg?react";

export const ShieldPersonIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <ShieldPerson
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
