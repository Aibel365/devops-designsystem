import { FileIcon, ImageIcon, PdfIcon } from "../icons";

export const FileTypeIcon = ({ type }: { type: string | null }) => {
    if (type?.includes("image")) {
        return <ImageIcon />;
    } else if (type?.includes("pdf")) {
        return <PdfIcon />;
    }

    return <FileIcon />;
};
