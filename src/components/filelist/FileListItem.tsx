import { Button, Link, List } from "@digdir/designsystemet-react";
import { DeleteIcon } from "../icons";
import { FileTypeIcon } from "./FileTypeIcon";
import type { AibelFile } from "./types";

export type FileListItemEventPayload = {
    file: AibelFile;
    event: React.MouseEvent<HTMLElement>;
};

export type FileListItemEventHandler = (payload: FileListItemEventPayload) => void;

export type FileListItemProps = {
    file: AibelFile;
    onFileNameClick?: FileListItemEventHandler;
    onDescriptionClick?: FileListItemEventHandler;
    onDeleteClick?: FileListItemEventHandler;
};

export const FileListItem: React.FC<FileListItemProps> = ({ file, onDeleteClick, onDescriptionClick, onFileNameClick }) => {
    if (!file.url) {
        return null;
    }
    return (
        <List.Item className="ads:text-clip ads:text-nowrap ads:whitespace-nowrap ads:flex ads:items-center ads:gap-2">
            <Link
                href={file.url}
                target="_blank"
                download={file.name}
                className="ads:flex ads:items-center ads:gap-2 ads:flex-1"
                onClick={(event) => {
                    onFileNameClick?.({ file, event });
                }}
            >
                <FileTypeIcon type={file.contentType} />
                {file.name ?? "Unnamed file"}
            </Link>
            {file.description && (
                <Button
                    variant="tertiary"
                    onClick={(event) => {
                        onDescriptionClick?.({ file, event });
                    }}
                    className="ads:text-ellipsis ads:truncate"
                >
                    {file.description}
                </Button>
            )}
            {onDeleteClick && (
                <Button
                    icon
                    variant="tertiary"
                    type="button"
                    title="Delete"
                    onClick={(event) => {
                        onDeleteClick?.({ file, event });
                    }}
                >
                    <DeleteIcon />
                </Button>
            )}
        </List.Item>
    );
};
