/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import VerifiedUser from "./verifiedUser.jsx.svg?react";

export const VerifiedUserIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <VerifiedUser
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
