import { Meta, StoryObj } from "@storybook/react-vite";
import { CameraAddPhotoIcon } from "./CameraAddPhotoIcon";

const meta: Meta<typeof CameraAddPhotoIcon> = {
  title: "Icons/Icons/CameraAddPhotoIcon",
  component: CameraAddPhotoIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof CameraAddPhotoIcon>;

export const Default: Story = {};

export default meta;
