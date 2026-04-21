/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import MoveItem from "./moveItem.jsx.svg?react";

export const MoveItemIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <MoveItem
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
