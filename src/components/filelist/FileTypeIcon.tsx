import { FileIcon, ImageIcon, PdfIcon, VideoIcon } from "../icons";

export const FileTypeIcon = ({ type }: { type: string | null }) => {
    if (type?.includes("image")) {
        return <ImageIcon />;
    } else if (type?.includes("pdf")) {
        return <PdfIcon />;
    } else if (type?.includes("video")) {
        return <VideoIcon />;
    }

    return <FileIcon />;
};
