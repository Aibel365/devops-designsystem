/// <reference types="vite-plugin-svgr/client" />
import { SVGProps } from "react";
import Attachment from "./attachment.jsx.svg?react";

export const AttachmentIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Attachment
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
