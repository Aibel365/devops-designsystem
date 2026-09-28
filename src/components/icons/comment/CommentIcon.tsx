/// <reference types="vite-plugin-svgr/client" />
import type { SVGProps } from "react";
import Comment from "./comment.jsx.svg?react";

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <Comment
            {...props}
            className={`ads:leading-0 ads:inline-block ${props.className ?? ""}`}
        />
    );
};
