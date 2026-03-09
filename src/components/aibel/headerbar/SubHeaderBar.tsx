import { ConditionRender } from "../../designsystemet";

export type SubHeaderBarProps = {
    centerContent?: React.ReactNode | string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    projectNumber?: string;
};

export const SubHeaderBar = ({ centerContent, projectNumber, leftContent, rightContent }: SubHeaderBarProps) => {
    return (
        <header className="ads:flex ads:items-center ads:justify-between ads:w-full ads:h-14">
            <div className="ads:flex-1">{leftContent && leftContent}</div>
            {centerContent && (
                <ConditionRender
                    condition={typeof centerContent === "string"}
                    fallback={centerContent}
                >
                    <p>{centerContent}</p>
                </ConditionRender>
            )}
            <div className="ads:flex-1 ads:justify-end">{projectNumber && <div className="ads:flex ads:items-center ads:w-fit ads:h-7 ads:sm:h-6 ads:py-0 ads:px-6 ads:border-100 ads:bg-indigo-400 ads:text">{projectNumber}</div>}</div>
            <ConditionRender condition={!!rightContent}>
                <div className="ads:flex-1 ads:justify-end">{rightContent}</div>
            </ConditionRender>
        </header>
    );
};
