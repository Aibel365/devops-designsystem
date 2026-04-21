import { ReactElement } from "react";
import { Button, Popover, Divider } from "../../../designsystemet/components";
import { getInitials } from "../getInitials";
import { Avatar, Paragraph } from "@digdir/designsystemet-react";
import { Base64ImageDisplay } from "../../image/Base64ImageDisplay";
import { MoveItemIcon, SwitchAccountIcon } from "../../../components/icons";
import { ConditionalPopover } from "../../conditionalPopover/ConditionalPopover";

export interface UserMenuContentHeaderBarProps {
    userName?: string;
    userEmail?: string;
    userImage?: string;
}

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

const UserMenuContentHeaderBar = ({ userName, userEmail, userImage, handleSwitchAccount, switchAccountLabel, handleLogout, logoutLabel, customMenuContent }: UserMenuContentProps) => {
    return (
        <>
            <div className="ads:flex ads:flex-row ads:gap-4 ads:px-4">
                <Avatar
                    aria-hidden
                    initials={getInitials(userName)}
                >
                    {userImage && (
                        <Base64ImageDisplay
                            alt="User image"
                            base64String={userImage}
                        />
                    )}
                </Avatar>
                <div className="ads:flex ads:flex-col ads:py-1 ads:text-black">
                    <Paragraph data-size="sm">{userName}</Paragraph>
                    <Paragraph data-size="xs">{userEmail}</Paragraph>
                </div>
            </div>
            <Divider />
            <div className="ads:flex ads:flex-col ads:w-full ads:gap-1">
                {handleSwitchAccount && (
                    <Button
                        data-size="sm"
                        variant="tertiary"
                        onClick={handleSwitchAccount}
                        aria-hidden
                    >
                        {
                            <SwitchAccountIcon
                                aria-hidden
                                className="ads:size-6"
                            />
                        }
                        {switchAccountLabel?.length ? switchAccountLabel : "Switch account"}
                    </Button>
                )}

                {customMenuContent?.map(({ label, icon, handleClick, popoverContent, disabled }) => (
                    <ConditionalPopover
                        key={label}
                        condition={!!popoverContent}
                        popoverContent={popoverContent}
                    >
                        <Button
                            data-size="sm"
                            variant="tertiary"
                            onClick={!popoverContent ? handleClick : undefined}
                            disabled={disabled}
                            aria-hidden
                        >
                            {icon}
                            {label}
                        </Button>
                    </ConditionalPopover>
                ))}
                <Button
                    data-size="sm"
                    variant="tertiary"
                    onClick={handleLogout}
                    aria-hidden
                >
                    {
                        <MoveItemIcon
                            aria-hidden
                            className="ads:size-6"
                        />
                    }
                    {logoutLabel?.length ? logoutLabel : "Logout"}
                </Button>
            </div>
        </>
    );
};

export const UserMenu = (props: UserMenuContentProps) => {
    return (
        <Popover.TriggerContext>
            <Popover.Trigger inline>
                <Avatar
                    data-color="info"
                    data-size="sm"
                    variant="circle"
                    aria-label={props.userName}
                    aria-hidden
                >
                    {props.userImage && (
                        <Base64ImageDisplay
                            alt="User image"
                            base64String={props.userImage ?? ""}
                        />
                    )}
                </Avatar>
            </Popover.Trigger>
            <Popover placement="bottom-end">
                <UserMenuContent {...props} />
            </Popover>
        </Popover.TriggerContext>
    );
};

const UserMenuContent = ({ userName, userEmail, userImage, handleLogout, handleSwitchAccount, customMenuContent }: UserMenuContentProps) => {
    return (
        <div className="ads:flex ads:flex-col ads:gap-2 ads:w-full">
            <UserMenuContentHeaderBar
                userImage={userImage}
                userName={userName}
                userEmail={userEmail}
                handleLogout={handleLogout}
                handleSwitchAccount={handleSwitchAccount}
                customMenuContent={customMenuContent}
            />
        </div>
    );
};
