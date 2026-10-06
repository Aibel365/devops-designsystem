import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddIcon } from "./add/AddIcon";
import { ArchiveIcon } from "./archive/ArchiveIcon";
import { ArrowBackIcon } from "./arrow-back/ArrowBackIcon";
import { ArrowForwardIcon } from "./arrow-forward/ArrowForwardIcon";
import { AttachmentIcon } from "./attachment/AttachmentIcon";
import { BarcodeScannerIcon } from "./barcode-scanner/BarcodeScanner";
import { CalendarMonthIcon } from "./calendar-month/CalendarMonthIcon";
import { CameraAddPhotoIcon } from "./camera-add-photo/CameraAddPhotoIcon";
import { CheckboxOutlineIcon } from "./checkbox-outline/CheckboxOutlineIcon";
import { CheckboxIcon } from "./checkbox/CheckboxIcon";
import { ChevronDownIcon } from "./chevron-down/ChevronDownIcon";
import { ChevronLeftIcon } from "./chevron-left/ChevronLeftIcon";
import { ChevronRightIcon } from "./chevron-right/ChevronRightIcon";
import { ChevronUpIcon } from "./chevron-up/ChevronUpIcon";
import { CloseIcon } from "./close/CloseIcon";
import { CollapseSidebarRightIcon } from "./collapse-sidebar-right/CollapseSidebarRightIcon";
import { CommentIcon } from "./comment/CommentIcon";
import { EditIcon } from "./edit/EditIcon";
import { EyeIcon } from "./eye/EyeIcon";
import { FileIcon } from "./file/FileIcon";
import { FilterIcon } from "./filter/FilterIcon";
import { GroupByIcon } from "./group-by/GroupByIcon";
import { HistoryIcon } from "./history/HistoryIcon";
import { HomeIcon } from "./home/HomeIcon";
import { HubAppsIcon } from "./hub-apps/HubAppsIcon";
import { ImageIcon } from "./image/ImageIcon";
import { InfoFilledIcon } from "./info-filled/InfoFilledIcon";
import { InfoIcon } from "./info/InfoIcon";
import { LanguageIcon } from "./language/LanguageIcon";
import { LinkUrlIcon } from "./link-url/LinkUrlIcon";
import { LogoutIcon } from "./logout/LogoutIcon";
import { MoreIcon } from "./more/MoreIcon";
import { OperationTypeIcon } from "./operation-type/OperationTypeIcon";
import { PdfIcon } from "./pdf/PdfIcon";
import { PersonFilledIcon } from "./person-filled/PersonFilledIcon";
import { PersonIcon } from "./person/PersonIcon";
import { RedoIcon } from "./redo/RedoIcon";
import { SaveIcon } from "./save/SaveIcon";
import { SearchIcon } from "./search/SearchIcon";
import { SettingsIcon } from "./settings/SettingsIcon";
import { CompletedStatusIcon } from "./status-icons/completed/CompletedStatusIcon";
import { NotStartedStatusIcon } from "./status-icons/not-started/NotStartedStatusIcon";
import { WarningStatusIcon } from "./status-icons/warning/WarningStatusIcon";
import { TemplateIcon } from "./template/TemplateIcon";
import { TrashIcon } from "./trash/TrashIcon";
import { UndoIcon } from "./undo/UndoIcon";
import { UploadFileIcon } from "./upload-file/UploadFileIcon";
import { WorkPrepIcon } from "./work-prep/WorkPrepIcon";
import { WorkTeamIcon } from "./work-team/WorkTeamIcon";

const meta: Meta = {
    title: "Icons/Overview",
    tags: ["!autodocs"]
};

export const Common: StoryObj = {
    args: {
        className: "ads:size-6"
    },
    render: (args) => (
        <div className="ads:flex ads:flex-wrap ads:gap-2">
            <AddIcon {...args} /> <ArchiveIcon {...args} /> <ArrowBackIcon {...args} /> <ArrowForwardIcon {...args} /> <AttachmentIcon {...args} />
            <BarcodeScannerIcon {...args} /> <CalendarMonthIcon {...args} /> <CameraAddPhotoIcon {...args} /> <CheckboxOutlineIcon {...args} /> <CheckboxIcon {...args} />
            <ChevronDownIcon {...args} /> <ChevronLeftIcon {...args} /> <ChevronRightIcon {...args} /> <ChevronUpIcon {...args} /> <CloseIcon {...args} /> <CollapseSidebarRightIcon {...args} /> <CommentIcon {...args} /> <EditIcon {...args} />{" "}
            <EyeIcon {...args} />
            <FileIcon {...args} /> <FilterIcon {...args} /> <GroupByIcon {...args} /> <HistoryIcon {...args} /> <HomeIcon {...args} />
            <HubAppsIcon {...args} /> <ImageIcon {...args} /> <InfoFilledIcon {...args} /> <InfoIcon {...args} /> <LanguageIcon {...args} />
            <LinkUrlIcon {...args} /> <LogoutIcon {...args} /> <MoreIcon {...args} /> <OperationTypeIcon {...args} /> <PdfIcon {...args} />
            <PersonFilledIcon {...args} /> <PersonIcon {...args} /> <RedoIcon {...args} /> <SaveIcon {...args} /> <SearchIcon {...args} />
            <SettingsIcon {...args} /> <TemplateIcon {...args} /> <TrashIcon {...args} /> <UndoIcon {...args} /> <UploadFileIcon {...args} /> <WorkPrepIcon {...args} /> <WorkTeamIcon {...args} />
        </div>
    )
};

export const Status: StoryObj = {
    render: () => (
        <div className="ads:flex ads:flex-wrap ads:gap-2">
            <CompletedStatusIcon className="ads:text-success-base-default" />
            <NotStartedStatusIcon />
            <WarningStatusIcon className=" ads:text-warning-base-default" />
        </div>
    )
};

export default meta;
