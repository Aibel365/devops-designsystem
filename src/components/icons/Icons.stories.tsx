import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddIcon } from "./add/AddIcon";
import { AnchorIcon } from "./anchor/AnchorIcon";
import { ArchiveIcon } from "./archive/ArchiveIcon";
import { ArrowBackIcon } from "./arrow-back/ArrowBackIcon";
import { ArrowDownwardIcon } from "./arrow-downward/ArrowDownwardIcon";
import { ArrowDropDownIcon } from "./arrow-drop-down/ArrowDropDownIcon";
import { ArrowForwardIcon } from "./arrow-forward/ArrowForwardIcon";
import { ArrowUpwardIcon } from "./arrow-upward/ArrowUpwardIcon";
import { AttachFileIcon } from "./attach-file/AttachFileIcon";
import { AttachmentIcon } from "./attachment/AttachmentIcon";
import { BarcodeScannerIcon } from "./barcode-scanner/BarcodeScanner";
import { CableIcon } from "./cable/CableIcon";
import { CalendarMonthIcon } from "./calendar-month/CalendarMonthIcon";
import { CameraAddPhotoIcon } from "./camera-add-photo/CameraAddPhotoIcon";
import { CheckCircleIconFilled } from "./check-circle-filled/CheckCircleIconFilled";
import { CheckCircleIcon } from "./check-circle/CheckCircleIcon";
import { CheckIcon } from "./check/CheckIcon";
import { CheckboxIndeterminateIcon } from "./checkbox-indeterminate/CheckboxIndeterminateIcon";
import { CheckboxOutlineIcon } from "./checkbox-outline/CheckboxOutlineIcon";
import { CheckboxIcon } from "./checkbox/CheckboxIcon";
import { ChevronLeftIcon } from "./chevron-left/ChevronLeftIcon";
import { ChevronRightIcon } from "./chevron-right/ChevronRightIcon";
import { CloseIcon } from "./close/CloseIcon";
import { CollapseSidebarRightIcon } from "./collapse-sidebar-right/CollapseSidebarRightIcon";
import { CommentIcon } from "./comment/CommentIcon";
import { ContrastIcon } from "./contrast/ContrastIcon";
import { DarkModeIcon } from "./darkMode/DarkModeIcon";
import { DeleteIcon } from "./delete/DeleteIcon";
import { DensityLargeIcon } from "./density-large/DensityLargeIcon";
import { DensityMediumIcon } from "./density-medium/DensityMediumIcon";
import { DensitySmallIcon } from "./density-small/DensitySmallIcon";
import { DescriptionIcon } from "./description/DescriptionIcon";
import { DownloadIcon } from "./download/DownloadIcon";
import { EditIcon } from "./edit/EditIcon";
import { ErrorIconFilled } from "./error-filled/ErrorIconFilled";
import { ExpandLessIcon } from "./expand-less/ExpandLessIcon";
import { ExpandMoreIcon } from "./expand-more/ExpandMoreIcon";
import { FileIcon } from "./file/FileIcon";
import { FilterListIcon } from "./filter-list/FilterListIcon";
import { FilterOutlineIcon } from "./filter-outline/FilterOutlineIcon";
import { FilterIcon } from "./filter/FilterIcon";
import { GroupByIcon } from "./group-by/GroupByIcon";
import { HandymanIcon } from "./handyman/HandymanIcon";
import { HistoryIcon } from "./history/HistoryIcon";
import { HomeStorageIcon } from "./home-storage/HomeStorageIcon";
import { HomeIcon } from "./home/HomeIcon";
import { HubAppsIcon } from "./hub-apps/HubAppsIcon";
import { ImageIcon } from "./image/ImageIcon";
import { InfoIconFilled } from "./info-filled/InfoIconFilled";
import { InfoIcon } from "./info/InfoIcon";
import { LanguageIcon } from "./language/LanguageIcon";
import { LightModeIcon } from "./lightMode/LightModeIcon";
import { LinkUrlIcon } from "./link-url/LinkUrlIcon";
import { ListAltIcon } from "./list-alt/ListAltIcon";
import { LogoutIcon } from "./logout/LogoutIcon";
import { MenuIcon } from "./menu/MenuIcon";
import { MoreVertIcon } from "./more-vert/MoreVertIcon";
import { MoreIcon } from "./more/MoreIcon";
import { MoveItemIcon } from "./move-item/MoveItemIcon";
import { OperationTypeIcon } from "./operation-type/OperationTypeIcon";
import { PdfIcon } from "./pdf/PdfIcon";
import { PersonFilledIcon } from "./person-filled/PersonFilledIcon";
import { PersonIcon } from "./person/PersonIcon";
import { PushPinFilledIcon } from "./push-pin-filled/PushPinFilledIcon";
import { PushPinIcon } from "./push-pin/PushPinIcon";
import { RadioFilledIcon } from "./radio-filled/RadioFilledIcon";
import { RadioOutlineIcon } from "./radio-outline/RadioOutlineIcon";
import { RedoIcon } from "./redo/RedoIcon";
import { RemoveIcon } from "./remove/RemoveIcon";
import { SaveIcon } from "./save/SaveIcon";
import { SearchIcon } from "./search/SearchIcon";
import { SettingsIcon } from "./settings/SettingsIcon";
import { ShieldPersonIcon } from "./shield-person/ShieldPersonIcon";
import { CompletedStatusIcon } from "./status-icons/completed/CompletedStatusIcon";
import { DangerStatusIcon } from "./status-icons/danger/DangerStatusIcon";
import { InProgressStatusIcon } from "./status-icons/in-progress/InProgressStatusIcon";
import { InfoStatusIcon } from "./status-icons/info/InfoStatusIcon";
import { NotStartedStatusIcon } from "./status-icons/not-started/NotStartedStatusIcon";
import { WarningStatusIcon } from "./status-icons/warning/WarningStatusIcon";
import { SwitchAccountIcon } from "./switch-account/SwitchAccountIcon";
import { TemplateIcon } from "./template/TemplateIcon";
import { UnfoldLessIcon } from "./unfold-less/UnfoldLessIcon";
import { UploadFileIcon } from "./upload-file/UploadFileIcon";
import { VerifiedUserIcon } from "./verified-user/VerifiedUserIcon";
import { VideoIcon } from "./video/VideoIcon";
import { ViewWeekIcon } from "./view-week/ViewWeekIcon";
import { VisibilityOffIcon } from "./visibility-off/VisibilityOffIcon";
import { WarningIconFilled } from "./warning-filled/WarningIconFilled";
import { WarningIcon } from "./warning/WarningIcon";
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
            <AddIcon {...args} /> <AnchorIcon {...args} /> <ArrowBackIcon {...args} /> <ArrowDownwardIcon {...args} /> <ArrowDropDownIcon {...args} />
            <ArrowForwardIcon {...args} /> <ArrowUpwardIcon {...args} /> <ArchiveIcon {...args} /> <AttachFileIcon {...args} /> <AttachmentIcon {...args} />
            <BarcodeScannerIcon {...args} /> <CableIcon {...args} /> <CalendarMonthIcon {...args} /> <CameraAddPhotoIcon {...args} /> <CheckCircleIconFilled {...args} />
            <CheckCircleIcon {...args} /> <CheckIcon {...args} /> <CheckboxIndeterminateIcon {...args} /> <CheckboxOutlineIcon {...args} /> <CheckboxIcon {...args} />
            <ChevronLeftIcon {...args} /> <ChevronRightIcon {...args} /> <CloseIcon {...args} /> <CollapseSidebarRightIcon {...args} /> <CommentIcon {...args} />
            <ContrastIcon {...args} /> <DarkModeIcon {...args} /> <DeleteIcon {...args} /> <DensityLargeIcon {...args} /> <DensityMediumIcon {...args} />
            <DensitySmallIcon {...args} /> <DescriptionIcon {...args} /> <DownloadIcon {...args} /> <EditIcon {...args} /> <ErrorIconFilled {...args} />
            <ExpandLessIcon {...args} /> <ExpandMoreIcon {...args} /> <FileIcon {...args} /> <FilterListIcon {...args} /> <FilterOutlineIcon {...args} />
            <FilterIcon {...args} /> <GroupByIcon {...args} /> <HandymanIcon {...args} /> <HistoryIcon {...args} /> <HomeStorageIcon {...args} />
            <HomeIcon {...args} /> <HubAppsIcon {...args} /> <ImageIcon {...args} /> <InfoIconFilled {...args} /> <InfoIcon {...args} />
            <LanguageIcon {...args} /> <LightModeIcon {...args} /> <LinkUrlIcon {...args} /> <ListAltIcon {...args} /> <LogoutIcon {...args} />
            <MenuIcon {...args} /> <MoreVertIcon {...args} /> <MoreIcon {...args} /> <MoveItemIcon {...args} /> <PdfIcon {...args} />
            <OperationTypeIcon {...args} />
            <PersonFilledIcon {...args} /> <PersonIcon {...args} /> <PushPinFilledIcon {...args} /> <PushPinIcon {...args} /> <RadioFilledIcon {...args} />
            <RadioOutlineIcon {...args} /> <RedoIcon {...args} /> <RemoveIcon {...args} /> <SaveIcon {...args} /> <SearchIcon {...args} />
            <SettingsIcon {...args} /> <ShieldPersonIcon {...args} /> <SwitchAccountIcon {...args} /> <TemplateIcon {...args} /> <UnfoldLessIcon {...args} />
            <UploadFileIcon {...args} />
            <VerifiedUserIcon {...args} /> <VideoIcon {...args} /> <ViewWeekIcon {...args} /> <VisibilityOffIcon {...args} /> <WarningIconFilled {...args} />
            <WarningIcon {...args} /> <WorkPrepIcon {...args} /> <WorkTeamIcon {...args} />
        </div>
    )
};

export const Status: StoryObj = {
    render: () => (
        <div className="ads:flex ads:flex-wrap ads:gap-2">
            <CompletedStatusIcon className="ads:text-success-base-default" />
            <NotStartedStatusIcon />
            <InProgressStatusIcon />
            <WarningStatusIcon className=" ads:text-warning-base-default" />
            <InfoStatusIcon className=" ads:text-info-base-default" />
            <DangerStatusIcon className=" ads:text-danger-base-default" />
        </div>
    )
};

export default meta;
