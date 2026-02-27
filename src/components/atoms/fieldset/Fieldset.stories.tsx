import type { Meta, StoryObj } from "@storybook/react-vite";

import { Fieldset } from "./Fieldset";
import { Radio } from "../radio/Radio";

const meta: Meta<typeof Fieldset> = {
    title: "Atoms/Fieldset",
    component: Fieldset
};

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
    render: () => (
        <Fieldset>
            <Fieldset.Legend>Which fjord arm do you live by?</Fieldset.Legend>
            <Fieldset.Description>The choice will help us improve the content we show you.</Fieldset.Description>
            <Radio
                label="Barsnesfjorden"
                name="radio"
                value="barsnesfjorden"
            />
            <Radio
                label="Eidsfjorden"
                name="radio"
                value="eidsfjorden"
            />
            <Radio
                label="None of these"
                name="radio"
                value="none-of-these"
            />
        </Fieldset>
    )
};

export default meta;
