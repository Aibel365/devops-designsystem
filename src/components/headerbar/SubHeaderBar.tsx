import { Paragraph } from "../../designsystemet/components/typography/paragraph/Paragraph";

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
            {!!centerContent && (typeof centerContent === "string" ? <Paragraph data-size="xl">{centerContent}</Paragraph> : centerContent)}
            <div className="ads:flex ads:flex-1 ads:justify-end">
                {projectNumber && <div className="ads:flex ads:items-center ads:w-fit ads:h-7 ads:sm:h-6 ads:py-0 ads:px-6 ads:rounded-full ads:bg-aibel-bright-blue-background-tinted">{projectNumber}</div>}
            </div>
            {!!rightContent && <div className="ads:flex-1 ads:justify-end">{rightContent}</div>}
        </header>
    );
};
