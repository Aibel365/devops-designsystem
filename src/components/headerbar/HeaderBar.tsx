import type { ReactElement } from "react";
import { AibelLogo } from "../logo/AibelLogo";
import { SubHeaderBar, type SubHeaderBarProps } from "./SubHeaderBar";
import { UserMenu, type UserMenuContentHeaderBarProps } from "./components/UserMenu";

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

export const HeaderBar = ({ title, logoLink = "/", linkCallback, children, subHeaderProps, className, ...delegated }: HeaderBarProps) => {
    return (
        <div className={className}>
            <div className="ads:sticky ads:top-0 ads:z-100 ads:flex ads:flex-col">
                <div className="ads:flex ads:content-between ads:w-full ads:h-19 ads:py-0 ads:px-8 ads:bg-aibel-blue-base-default ads:text-white ads:z-1">
                    <div className="ads:flex ads:items-center ads:shrink-0">
                        <a
                            className="ads:h-7 ads:bg-transparent ads:border-0 ads:hover:cursor-pointer ads:flex ads:items-center ads:justify-between ads:gap-2"
                            href={linkCallback ? undefined : logoLink}
                            onClick={linkCallback ? () => linkCallback(logoLink) : undefined}
                        >
                            <AibelLogo className="ads:h-5" />
                            {!!title && (
                                <>
                                    <div className="ads:w-px ads:h-8 ads:bg-white/40"></div>
                                    <span>{title}</span>
                                </>
                            )}
                        </a>
                    </div>
                    {children && <div className="ads:flex ads:w-full ads:items-center ads:justify-center ads:h-19">{children}</div>}
                    {delegated.userName && (
                        <div className="ads:flex ads:ml-auto ads:items-center">
                            <UserMenu {...delegated} />
                        </div>
                    )}
                </div>
                {subHeaderProps && <SubHeaderBar {...subHeaderProps} />}
            </div>
        </div>
    );
};
