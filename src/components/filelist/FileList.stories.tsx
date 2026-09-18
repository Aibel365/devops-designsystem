import { Alert, Button, Divider, Field, Heading, Label, Paragraph } from "@digdir/designsystemet-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Dialog } from "../../designsystemet/components/dialog/Dialog";
import { EXPERIMENTAL_FileUpload } from "../../designsystemet/components/file-upload/FileUpload";
import { Textarea } from "../../designsystemet/components/textarea/Textarea";
import { UploadFileIcon } from "../icons/upload-file/UploadFileIcon";
import { FileList } from "./FileList";
import type { AibelFile } from "./types";

EXPERIMENTAL_FileUpload.displayName = "EXPERIMENTAL_FileUpload";
FileList.displayName = "FileList";
Field.displayName = "Field";
Label.displayName = "Label";
Button.displayName = "Button";
Alert.displayName = "Alert";
Divider.displayName = "Divider";
Heading.displayName = "Heading";
Paragraph.displayName = "Paragraph";
Dialog.displayName = "Dialog";
Textarea.displayName = "Textarea";

const meta: Meta<typeof FileList> = {
    title: "Components/FileList",
    component: FileList,
    tags: ["autodocs"]
};

type Story = StoryObj<typeof FileList>;

const richMockFiles: AibelFile[] = [
    {
        id: "f-001",
        name: "Project-specification-v2.pdf",
        contentType: "application/pdf",
        url: "https://example.com/files/project-specification-v2.pdf",
        description: "Latest approved project specification document."
    },
    {
        id: "f-002",
        name: "site-layout.png",
        contentType: "image/png",
        url: "https://example.com/files/site-layout.png",
        description: "Site layout image for offshore module placement."
    },
    {
        id: "f-003",
        name: "commissioning-checklist.xlsx",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        url: "https://example.com/files/commissioning-checklist.xlsx",
        description: "Checklist used during commissioning phase."
    },
    {
        id: "f-004",
        name: "piping-isometrics-revB.dwg",
        contentType: "image/vnd.dwg",
        url: "https://example.com/files/piping-isometrics-revB.dwg",
        description: "Updated piping isometrics, revision B."
    },
    {
        id: "f-005",
        name: "safety-observations-2026-09.txt",
        contentType: "text/plain",
        url: "https://example.com/files/safety-observations-2026-09.txt",
        description: "Daily safety observations for September 2026."
    }
];

const filesWithNullValues: AibelFile[] = [
    {
        id: "f-006",
        name: null,
        contentType: null,
        url: "https://example.com/files/unknown-file",
        description: null
    },
    {
        id: "f-007",
        name: "draft-notes.txt",
        contentType: "text/plain",
        url: null,
        description: "Draft notes pending upload target URL."
    },
    {
        id: "f-008",
        name: null,
        contentType: "application/octet-stream",
        url: null,
        description: "Imported from legacy archive with incomplete metadata."
    }
];

export const Default: Story = {
    args: {
        files: richMockFiles
    }
};

export const WithNullValues: Story = {
    args: {
        files: filesWithNullValues
    }
};

export const MixedData: Story = {
    args: {
        files: [...richMockFiles.slice(0, 3), ...filesWithNullValues]
    }
};

export const Empty: Story = {
    args: {
        files: []
    }
};

export const WithFileUpload: Story = {
    args: {
        files: richMockFiles,
        children: (
            <Field>
                <Label>Upload file</Label>
                <EXPERIMENTAL_FileUpload>
                    <Field.Description>Drop file here</Field.Description>
                    <Field.Description>File must be in CSV format and less than 2 MB</Field.Description>
                    <Button data-variant="secondary">Upload file</Button>
                    <input type="file" />
                </EXPERIMENTAL_FileUpload>
            </Field>
        )
    }
};

export const WithSimpleUploadButton: Story = {
    args: {
        files: richMockFiles,
        children: (
            <Button data-variant="secondary">
                <UploadFileIcon />
                Add file
            </Button>
        )
    }
};

export const DescriptionDialogOnClick: Story = {
    args: {
        files: richMockFiles,
        children: (
            <Field>
                <Label>Upload file</Label>
                <EXPERIMENTAL_FileUpload>
                    <Field.Description>Drop file here</Field.Description>
                    <Field.Description>File must be in CSV format and less than 2 MB</Field.Description>
                    <Button data-variant="secondary">Upload file</Button>
                    <input type="file" />
                </EXPERIMENTAL_FileUpload>
            </Field>
        )
    },
    render: function DescriptionDialogRender(args) {
        const [selectedDescription, setSelectedDescription] = useState<string | null>(null);

        return (
            <>
                <FileList
                    files={args.files}
                    children={args.children}
                    onDescriptionClick={({ file }) => {
                        setSelectedDescription(file.description || "No description available.");
                    }}
                />
                <Dialog
                    open={Boolean(selectedDescription)}
                    closedby="any"
                    onClose={() => setSelectedDescription(null)}
                >
                    <Dialog.Block>
                        <Label htmlFor="file-description-textarea">File description</Label>
                        <Textarea
                            id="file-description-textarea"
                            className="ads:w-full ads:mt-2"
                            value={selectedDescription ?? ""}
                            readOnly
                            rows={6}
                        />
                    </Dialog.Block>
                    <Dialog.Block>
                        <div className="ads:flex ads:justify-end">
                            <Button
                                type="button"
                                onClick={() => setSelectedDescription(null)}
                            >
                                Close
                            </Button>
                        </div>
                    </Dialog.Block>
                </Dialog>
            </>
        );
    }
};

export const WithAllEventHandlers: Story = {
    args: {
        files: richMockFiles,
        children: (
            <Field>
                <Label>Upload file</Label>
                <EXPERIMENTAL_FileUpload>
                    <Field.Description>Drop file here</Field.Description>
                    <Field.Description>File must be in CSV format and less than 2 MB</Field.Description>
                    <Button data-variant="secondary">Upload file</Button>
                    <input type="file" />
                </EXPERIMENTAL_FileUpload>
            </Field>
        )
    },
    render: function AllEventHandlersRender(args) {
        const [lastEvent, setLastEvent] = useState("No file interaction yet.");
        const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
        const [pendingDeleteFile, setPendingDeleteFile] = useState<AibelFile | null>(null);

        return (
            <>
                <FileList
                    files={args.files}
                    children={args.children}
                    onFileNameClick={({ file, event }) => {
                        event.preventDefault();
                        setLastEvent(`File name clicked: ${file.name ?? "Unnamed file"}`);
                    }}
                    onDescriptionClick={({ file }) => {
                        const description = file.description || "No description available.";
                        setLastEvent("Description clicked.");
                        setSelectedDescription(description);
                    }}
                    onDeleteClick={({ file }) => {
                        setPendingDeleteFile(file);
                        setLastEvent(`Delete clicked: ${file.name ?? "Unnamed file"}`);
                    }}
                />
                <Divider />
                <Alert>{lastEvent}</Alert>
                <Dialog
                    open={Boolean(pendingDeleteFile)}
                    closedby="any"
                    onClose={() => {
                        setPendingDeleteFile(null);
                        setLastEvent("Delete canceled.");
                    }}
                >
                    <Dialog.Block>
                        <Heading>Confirm delete</Heading>
                    </Dialog.Block>
                    <Dialog.Block>
                        <Paragraph>Are you sure you want to delete: {pendingDeleteFile?.name ?? "Unnamed file"}</Paragraph>
                    </Dialog.Block>
                    <Dialog.Block>
                        <div className="ads:flex ads:justify-end ads:gap-2">
                            <Button
                                type="button"
                                data-variant="secondary"
                                onClick={() => {
                                    setPendingDeleteFile(null);
                                    setLastEvent("Delete canceled.");
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="button"
                                onClick={() => {
                                    setLastEvent(`Delete confirmed: ${pendingDeleteFile?.name ?? "Unnamed file"}`);
                                    setPendingDeleteFile(null);
                                }}
                            >
                                Confirm delete
                            </Button>
                        </div>
                    </Dialog.Block>
                </Dialog>
                <Dialog
                    open={Boolean(selectedDescription)}
                    closedby="any"
                    onClose={() => setSelectedDescription(null)}
                >
                    <Dialog.Block>
                        <Label htmlFor="all-events-file-description">File description</Label>
                        <Textarea
                            id="all-events-file-description"
                            className="ads:w-full ads:mt-2"
                            value={selectedDescription ?? ""}
                            readOnly
                            rows={6}
                        />
                    </Dialog.Block>
                    <Dialog.Block>
                        <div className="ads:flex ads:justify-end">
                            <Button
                                type="button"
                                onClick={() => setSelectedDescription(null)}
                            >
                                Close
                            </Button>
                        </div>
                    </Dialog.Block>
                </Dialog>
            </>
        );
    }
};

export default meta;
