import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddIcon } from "./add/AddIcon";
import { AnchorIcon } from "./anchor/AnchorIcon";
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
import { HandymanIcon } from "./handyman/HandymanIcon";
import { HomeStorageIcon } from "./home-storage/HomeStorageIcon";
import { ImageIcon } from "./image/ImageIcon";
import { InfoIconFilled } from "./info-filled/InfoIconFilled";
import { InfoIcon } from "./info/InfoIcon";
import { LanguageIcon } from "./language/LanguageIcon";
import { LightModeIcon } from "./lightMode/LightModeIcon";
import { ListAltIcon } from "./list-alt/ListAltIcon";
import { MenuIcon } from "./menu/MenuIcon";
import { MoreVertIcon } from "./more-vert/MoreVertIcon";
import { MoveItemIcon } from "./move-item/MoveItemIcon";
import { PdfIcon } from "./pdf/PdfIcon";
import { PersonIcon } from "./person/PersonIcon";
import { PushPinFilledIcon } from "./push-pin-filled/PushPinFilledIcon";
import { PushPinIcon } from "./push-pin/PushPinIcon";
import { RadioFilledIcon } from "./radio-filled/RadioFilledIcon";
import { RadioOutlineIcon } from "./radio-outline/RadioOutlineIcon";
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
import { UnfoldLessIcon } from "./unfold-less/UnfoldLessIcon";
import { UploadFileIcon } from "./upload-file/UploadFileIcon";
import { VerifiedUserIcon } from "./verified-user/VerifiedUserIcon";
import { VideoIcon } from "./video/VideoIcon";
import { ViewWeekIcon } from "./view-week/ViewWeekIcon";
import { VisibilityOffIcon } from "./visibility-off/VisibilityOffIcon";
import { WarningIconFilled } from "./warning-filled/WarningIconFilled";
import { WarningIcon } from "./warning/WarningIcon";

const meta: Meta = {
    title: "Demo",
    tags: ["!autodocs"]
};

export const Common: StoryObj = {
    args: {
        className: "ads:size-6"
    },
    render: (args) => (
        <div className="ads:flex ads:flex-wrap ads:gap-2">
            <ViewWeekIcon {...args} /> <FilterListIcon {...args} /> <EditIcon {...args} /> <ChevronLeftIcon {...args} /> <ChevronRightIcon {...args} />
            <ExpandMoreIcon {...args} /> <ExpandLessIcon {...args} /> <UnfoldLessIcon {...args} /> <CloseIcon {...args} /> <LanguageIcon {...args} />
            <CalendarMonthIcon {...args} /> <DownloadIcon {...args} /> <InfoIcon {...args} /> <InfoIconFilled {...args} /> <AnchorIcon {...args} />
            <ArrowForwardIcon {...args} /> <ArrowBackIcon {...args} /> <ArrowDownwardIcon {...args} /> <ArrowUpwardIcon {...args} /> <CheckIcon {...args} />
            <SettingsIcon {...args} /> <RemoveIcon {...args} /> <AddIcon {...args} /> <MoveItemIcon {...args} /> <ListAltIcon {...args} />
            <DeleteIcon {...args} /> <DensitySmallIcon {...args} /> <DensityMediumIcon {...args} /> <DensityLargeIcon {...args} /> <MoreVertIcon {...args} />
            <SwitchAccountIcon {...args} /> <WarningIcon {...args} /> <WarningIconFilled {...args} /> <SaveIcon {...args} /> <CameraAddPhotoIcon {...args} />
            <AttachFileIcon {...args} /> <AttachmentIcon {...args} /> <FileIcon {...args} /> <SearchIcon {...args} /> <ArrowDropDownIcon {...args} />
            <VisibilityOffIcon {...args} /> <CheckboxOutlineIcon {...args} /> <CheckboxIcon {...args} /> <CheckboxIndeterminateIcon {...args} /> <RadioOutlineIcon {...args} />
            <RadioFilledIcon {...args} /> <CheckCircleIcon {...args} /> <CheckCircleIconFilled {...args} /> <FilterIcon {...args} /> <FilterOutlineIcon {...args} />
            <MenuIcon {...args} /> <PushPinIcon {...args} /> <PushPinFilledIcon {...args} /> <BarcodeScannerIcon {...args} /> <DarkModeIcon {...args} />
            <LightModeIcon {...args} /> <ContrastIcon {...args} /> <VideoIcon {...args} /> <VerifiedUserIcon {...args} /> <UploadFileIcon {...args} />
            <ShieldPersonIcon {...args} /> <CableIcon {...args} /> <HandymanIcon {...args} /> <HomeStorageIcon {...args} /> <PersonIcon {...args} />
            <DescriptionIcon {...args} /> <ErrorIconFilled {...args} /> <ImageIcon {...args} /> <PdfIcon {...args} />
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
