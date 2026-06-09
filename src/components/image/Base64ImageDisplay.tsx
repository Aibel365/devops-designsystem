import type { ImgHTMLAttributes } from "react";

export type Base64ImageDisplayProps = ImgHTMLAttributes<HTMLImageElement> & {
    base64String: string;
};

export const Base64ImageDisplay = ({ base64String, alt, ...rest }: Base64ImageDisplayProps) => {
    // Ensure the string has the correct prefix
    const src = base64String.startsWith("data:image") ? base64String : `data:image/png;base64,${base64String}`;

    return (
        <img
            src={src}
            alt={alt || "Base64 image"}
            className="ads:max-w-full ads:h-auto ads:object-cover"
            {...rest}
        />
    );
};
