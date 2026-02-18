import { Meta, StoryObj } from "@storybook/react-vite";
import { BarcodeScannerIcon } from "./BarcodeScanner";

const meta: Meta<typeof BarcodeScannerIcon> = {
    title: "Icons/Icons/BarcodeScannerIcon",
    component: BarcodeScannerIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof BarcodeScannerIcon>;

export const Default: Story = {};

export default meta;
