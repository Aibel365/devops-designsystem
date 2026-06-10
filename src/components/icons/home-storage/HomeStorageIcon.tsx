/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import HomeStorage from "./homeStorage.jsx.svg?react";

export const HomeStorageIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <HomeStorage
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
