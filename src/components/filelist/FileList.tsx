import { Card, List } from "@digdir/designsystemet-react";
import { FileListItem, type FileListItemProps } from "./FileListItem";
import type { AibelFile } from "./types";

export type FileListProps = { files: AibelFile[] } & Pick<FileListItemProps, "onDeleteClick" | "onFileNameClick" | "onDescriptionClick"> & React.PropsWithChildren;

export const FileList: React.FC<FileListProps> = ({ files, children, onDeleteClick, onDescriptionClick, onFileNameClick }) => {
    return (
        <Card>
            <List.Unordered className="ads:pl-1!">
                {files.map((file) => (
                    <FileListItem
                        key={file.id}
                        file={file}
                        onDeleteClick={onDeleteClick}
                        onDescriptionClick={onDescriptionClick}
                        onFileNameClick={onFileNameClick}
                    />
                ))}
            </List.Unordered>
            {children}
        </Card>
    );
};
