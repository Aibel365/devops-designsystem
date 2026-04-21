import { Meta, StoryObj } from "@storybook/react-vite";
import { EditIcon } from "./edit/EditIcon";
import { AddIcon } from "./add/AddIcon";
import { PdfIcon } from "./pdf/PdfIcon";
import { HomeStorageIcon } from "./home-storage/HomeStorageIcon";
import { HandymanIcon } from "./handyman/HandymanIcon";
import { CableIcon } from "./cable/CableIcon";
import { ShieldPersonIcon } from "./shield-person/ShieldPersonIcon";
import { UploadFileIcon } from "./upload-file/UploadFileIcon";
import { VerifiedUserIcon } from "./verified-user/VerifiedUserIcon";
import { VideoIcon } from "./video/VideoIcon";
import { ContrastIcon } from "./contrast/ContrastIcon";
import { LightModeIcon } from "./lightMode/LightModeIcon";
import { DarkModeIcon } from "./darkMode/DarkModeIcon";
import { BarcodeScannerIcon } from "./barcode-scanner/BarcodeScanner";
import { PushPinFilledIcon } from "./push-pin-filled/PushPinFilledIcon";
import { PushPinIcon } from "./push-pin/PushPinIcon";
import { MenuIcon } from "./menu/MenuIcon";
import { FilterOutlineIcon } from "./filter-outline/FilterOutlineIcon";
import { FilterIcon } from "./filter/FilterIcon";
import { CheckCircleIcon } from "./check-circle/CheckCircleIcon";
import { RadioFilledIcon } from "./radio-filled/RadioFilledIcon";
import { RadioOutlineIcon } from "./radio-outline/RadioOutlineIcon";
import { CheckboxIndeterminateIcon } from "./checkbox-indeterminate/CheckboxIndeterminateIcon";
import { CheckboxIcon } from "./checkbox/CheckboxIcon";
import { CheckboxOutlineIcon } from "./checkbox-outline/CheckboxOutlineIcon";
import { VisibilityOffIcon } from "./visibility-off/VisibilityOffIcon";
import { PersonIcon } from "./person/PersonIcon";
import { ArrowDropDownIcon } from "./arrow-drop-down/ArrowDropDownIcon";
import { SearchIcon } from "./search/SearchIcon";
import { FileIcon } from "./file/FileIcon";
import { AttachFileIcon } from "./attach-file/AttachFileIcon";
import { CameraAddPhotoIcon } from "./camera-add-photo/CameraAddPhotoIcon";
import { SaveIcon } from "./save/SaveIcon";
import { WarningIconFilled } from "./warning-filled/WarningIconFilled";
import { WarningIcon } from "./warning/WarningIcon";
import { SwitchAccountIcon } from "./switch-account/SwitchAccountIcon";
import { MoreVertIcon } from "./more-vert/MoreVertIcon";
import { DensityLargeIcon } from "./density-large/DensityLargeIcon";
import { DensityMediumIcon } from "./density-medium/DensityMediumIcon";
import { DensitySmallIcon } from "./density-small/DensitySmallIcon";
import { DeleteIcon } from "./delete/DeleteIcon";
import { ListAltIcon } from "./list-alt/ListAltIcon";
import { MoveItemIcon } from "./move-item/MoveItemIcon";
import { RemoveIcon } from "./remove/RemoveIcon";
import { SettingsIcon } from "./settings/SettingsIcon";
import { CheckIcon } from "./check/CheckIcon";
import { ArrowUpwardIcon } from "./arrow-upward/ArrowUpwardIcon";
import { ArrowDownwardIcon } from "./arrow-downward/ArrowDownwardIcon";
import { ArrowBackIcon } from "./arrow-back/ArrowBackIcon";
import { ArrowForwardIcon } from "./arrow-forward/ArrowForwardIcon";
import { AnchorIcon } from "./anchor/AnchorIcon";
import { InfoIconFilled } from "./info-filled/InfoIconFilled";
import { InfoIcon } from "./info/InfoIcon";
import { DownloadIcon } from "./download/DownloadIcon";
import { CalendarMonthIcon } from "./calendar-month/CalendarMonthIcon";
import { LanguageIcon } from "./language/LanguageIcon";
import { CloseIcon } from "./close/CloseIcon";
import { UnfoldLessIcon } from "./unfold-less/UnfoldLessIcon";
import { ExpandLessIcon } from "./expand-less/ExpandLessIcon";
import { ExpandMoreIcon } from "./expand-more/ExpandMoreIcon";
import { ChevronRightIcon } from "./chevron-right/ChevronRightIcon";
import { ChevronLeftIcon } from "./chevron-left/ChevronLeftIcon";
import { FilterListIcon } from "./filter-list/FilterListIcon";
import { ViewWeekIcon } from "./view-week/ViewWeekIcon";
import { CompletedStatusIcon } from "./status-icons/completed/CompletedStatusIcon";
import { NotStartedStatusIcon } from "./status-icons/not-started/NotStartedStatusIcon";
import { InProgressStatusIcon } from "./status-icons/in-progress/InProgressStatusIcon";
import { WarningStatusIcon } from "./status-icons/warning/WarningStatusIcon";
import { InfoStatusIcon } from "./status-icons/info/InfoStatusIcon";
import { DangerStatusIcon } from "./status-icons/danger/DangerStatusIcon";
import { AttachmentIcon } from "./attachment/AttachmentIcon";
import { CheckCircleIconFilled } from "./check-circle-filled/CheckCircleIconFilled";
import { DescriptionIcon } from "./description/DescriptionIcon";
import { ErrorIconFilled } from "./error-filled/ErrorIconFilled";
import { ImageIcon } from "./image/ImageIcon";

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
            <CompletedStatusIcon className="ads:size-6 ads:text-success-base-default" />
            <NotStartedStatusIcon className="ads:size-6" />
            <InProgressStatusIcon className="ads:size-6" />
            <WarningStatusIcon className="ads:size-6 ads:text-warning-base-default" />
            <InfoStatusIcon className="ads:size-6 ads:text-info-base-default" />
            <DangerStatusIcon className="ads:size-6 ads:text-danger-base-default" />
        </div>
    )
};

export default meta;
