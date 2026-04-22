import { Paragraph } from "../../designsystemet/components/typography/paragraph/Paragraph";
import { ConditionRender } from "../conditionRender/ConditionRender";

export type SubHeaderBarProps = {
    centerContent?: React.ReactNode | string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    projectNumber?: string;
};

export const SubHeaderBar = ({ centerContent, projectNumber, leftContent, rightContent }: SubHeaderBarProps) => {
    return (
        <header className="ads:flex ads:items-center ads:justify-between ads:w-full ads:h-14 px-8">
            <div className="ads:flex-1">{leftContent && leftContent}</div>
            {centerContent && (
                <ConditionRender
                    condition={typeof centerContent === "string"}
                    fallback={centerContent}
                >
                    <Paragraph data-size="xl">{centerContent}</Paragraph>
                </ConditionRender>
            )}
            <div className="ads:flex ads:flex-1 ads:justify-end">{projectNumber && <div className="ads:flex ads:items-center ads:w-fit ads:h-7 ads:sm:h-6 ads:py-0 ads:px-6 ads:rounded-full ads:bg-bright-blue-background-tinted">{projectNumber}</div>}</div>
            <ConditionRender condition={!!rightContent}>
                <div className="ads:flex-1 ads:justify-end">{rightContent}</div>
            </ConditionRender>
        </header>
    );
};
