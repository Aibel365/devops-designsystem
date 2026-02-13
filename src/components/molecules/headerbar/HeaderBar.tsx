import { ReactElement } from "react";
import { SubHeaderBar, SubHeaderBarProps } from "./SubHeaderBar";
import { UserMenu, UserMenuContentHeaderBarProps } from "./UserMenu";
import { AibelLogo, ConditionRender } from "../../atoms";

export type HeaderBarProps = UserMenuContentProps & {
    title?: string;
    logoLink?: string;
    titleLink?: string;
    linkCallback?: (link: string) => void;
    children?: React.ReactNode;
    subHeaderProps?: SubHeaderBarProps;
    className?: string;
};

export type CustomMenuContentConfig = {
    label?: string;
    icon?: string | ReactElement;
    handleClick?: () => void;
    popoverContent?: React.ReactNode;
    disabled?: boolean;
};

export type UserMenuContentProps = UserMenuContentHeaderBarProps & {
    handleSwitchAccount?: () => void;
    switchAccountLabel?: string;
    handleLogout: () => void;
    logoutLabel?: string;
    userImage?: string;
    customMenuContent?: CustomMenuContentConfig[];
};

export const HeaderBar = ({ title, logoLink = "/", titleLink = "/", linkCallback, children, subHeaderProps, className, ...delegated }: HeaderBarProps) => {
    return (
        <div className="ads:sticky ads:top-0 ads:z-100 ads:flex ads:flex-col">
            <div className="ads:flex ads:content-between ads:w-full ads:h-19 ads:py-0 ads:px-8 ads:bg-blue-900 ads:text-neutral-100 ads:shadow-2xl ads:shadow-black/15 ads:z-1">
                <div className="ads:flex ads:items-center ads:justify-between ads:gap-2">
                    <a
                        className="ads:p-0 ads:h-7 ads:md:h-5 ads:bg-transparent ads:border-0 ads:hover:cursor-pointer"
                        href={linkCallback ? undefined : logoLink}
                        onClick={linkCallback ? () => linkCallback(logoLink) : undefined}
                    >
                        <AibelLogo className="ads:h-7 ads:md:h-5 ads:p-0" />
                    </a>
                    <ConditionRender condition={!!title}>
                        <div className="ads:shrink-0 ads:w-px ads:h-8 ads:bg-white/40 ads:xl:hidden"></div>
                        <a className="ads:shrink-0 ads:no-underline ads:text-neutral-100">
                            <span>{title}</span>
                        </a>
                    </ConditionRender>
                </div>
                {children && <div className="ads:flex ads:items-center ads:justify-center ads:h-19 ads:absolute ads:left-1/2 ads:translate-x-1/2">{children}</div>}
                {delegated.userName && (
                    <div className="ads:flex ads:ml-auto ads:items-center">
                        <UserMenu {...delegated} />
                    </div>
                )}
            </div>
            {subHeaderProps && <SubHeaderBar {...subHeaderProps} />}
        </div>
    );
};
