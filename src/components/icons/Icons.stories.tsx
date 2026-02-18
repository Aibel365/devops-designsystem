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
    tags: ["!autodocs"],
    parameters: { docs: { disable: true } }
};

export const Common: StoryObj = {
    render: () => (
        <>
            <ViewWeekIcon /> <FilterListIcon /> <EditIcon /> <ChevronLeftIcon /> <ChevronRightIcon />
            <ExpandMoreIcon /> <ExpandLessIcon /> <UnfoldLessIcon /> <CloseIcon /> <LanguageIcon />
            <CalendarMonthIcon /> <DownloadIcon /> <InfoIcon /> <InfoIconFilled /> <AnchorIcon />
            <ArrowForwardIcon /> <ArrowBackIcon /> <ArrowDownwardIcon /> <ArrowUpwardIcon /> <CheckIcon />
            <SettingsIcon /> <RemoveIcon /> <AddIcon /> <MoveItemIcon /> <ListAltIcon />
            <DeleteIcon /> <DensitySmallIcon /> <DensityMediumIcon /> <DensityLargeIcon /> <MoreVertIcon />
            <SwitchAccountIcon /> <WarningIcon /> <WarningIconFilled /> <SaveIcon /> <CameraAddPhotoIcon />
            <AttachFileIcon /> <AttachmentIcon /> <FileIcon /> <SearchIcon /> <ArrowDropDownIcon />
            <VisibilityOffIcon /> <CheckboxOutlineIcon /> <CheckboxIcon /> <CheckboxIndeterminateIcon /> <RadioOutlineIcon />
            <RadioFilledIcon /> <CheckCircleIcon /> <CheckCircleIconFilled /> <FilterIcon /> <FilterOutlineIcon />
            <MenuIcon /> <PushPinIcon /> <PushPinFilledIcon /> <BarcodeScannerIcon /> <DarkModeIcon />
            <LightModeIcon /> <ContrastIcon /> <VideoIcon /> <VerifiedUserIcon /> <UploadFileIcon />
            <ShieldPersonIcon /> <CableIcon /> <HandymanIcon /> <HomeStorageIcon /> <PersonIcon />
            <DescriptionIcon /> <ErrorIconFilled /> <ImageIcon /> <PdfIcon />
        </>
    )
};

export const Status: StoryObj = {
    render: () => (
        <>
            <CompletedStatusIcon />
            <NotStartedStatusIcon />
            <InProgressStatusIcon />
            <WarningStatusIcon />
            <InfoStatusIcon />
            <DangerStatusIcon />
        </>
    )
};

export default meta;
