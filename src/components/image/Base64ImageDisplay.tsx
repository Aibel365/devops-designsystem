import { ImgHTMLAttributes } from "react";

export type Base64ImageDisplayProps = ImgHTMLAttributes<HTMLImageElement> & {
    base64String: string;
};

export const Base64ImageDisplay = ({ base64String, alt, ...rest }: Base64ImageDisplayProps) => {
    // Ensure the string has the correct prefix
    const src = base64String.startsWith("data:image") ? base64String : `data:image/png;base64,${base64String}`;

    return (
        <div className="p-4">
            <img
                src={src}
                alt={alt || "Base64 image"}
                className="max-w-full h-auto rounded-lg shadow-md object-cover"
                {...rest}
            />
        </div>
    );
};
