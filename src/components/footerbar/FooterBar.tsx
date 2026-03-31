import { Button } from "../../designsystemet/components";

export type IFooterBar = {
    centeredContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    onBackClick?: () => void;
    className?: string;
};

export const FooterBar = (props: IFooterBar) => {
    return (
        <div className={props.className}>
            <div className={`ads:fixed ads:bottom-0 ads:left-0 ads:right-0 ads:z-100 ads:flex ads:items-center ads:justify-between ads:w-full ads:min-h-12 ads:px-8 ads:bg-aibel-blue-base-default ads:text-neutral-100 ${props.className}`}>
                {props.onBackClick && (
                    <Button
                        variant="secondary"
                        className="ads:text-neutral-100 ads:hover:text-aibel-bright-blue"
                        onClick={props.onBackClick}
                        data-size="sm"
                        data-color="white"
                    >
                        Back
                    </Button>
                )}
                {props.centeredContent && <div className="ads:flex ads:items-center ads:justify-center ads:absolute ads:left-1/2 ads:-translate-x-1/2">{props.centeredContent}</div>}
                {props.rightContent && props.rightContent}
            </div>
        </div>
    );
};
