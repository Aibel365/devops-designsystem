import { forwardRef, ReactElement } from "react";
import { AibelLogo, Base64ImageDisplay, Button, Divider, Popover } from "../../designsystemet";
import { getInitials } from "./getInitials";
import { Avatar, Paragraph } from "@digdir/designsystemet-react";

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

const MenuItem = () => {
    return (
        <div
            className="ads:flex ads:flex-row ads:gap-2 ads:bg-amber-300 ads:cursor-pointer ads:shadow transition duration-300 ease-in-out 
            hover:scale-110 hover:bg-blue-700"
            onClick={() => alert("Switch account")}
        >
            <AibelLogo className="ads:flex-1/12" />
            <Paragraph
                className="ads:flex-11/12 ads:text-amber-600"
                data-size="sm"
            >
                Switch account
            </Paragraph>
        </div>
    );
};

const UserMenuContentHeaderBar = ({ userName, userEmail }: UserMenuContentHeaderBarProps) => {
    return (
        <>
            <div className="ads:flex ads:flex-row ads:gap-4 ads:px-4">
                <Avatar
                    aria-hidden
                    initials={getInitials(userName)}
                >
                    <Base64ImageDisplay
                        alt="Kari Norman"
                        base64String={
                            "data:image/jpeg;base64,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"
                        }
                    />
                </Avatar>
                <div className="ads:flex ads:flex-col ads:py-1 ads:text-black">
                    <Paragraph data-size="sm">{userName}</Paragraph>
                    <Paragraph data-size="xs">{userEmail}</Paragraph>
                </div>
            </div>
            <div className="ads:flex ads:flex-col ads:w-full ads:gap-1">
                <MenuItem />
                <MenuItem />
                <div>Log out</div>
                <Button
                    data-size="sm"
                    variant="tertiary"
                >
                    {/* <PencilWritingIcon aria-hidden /> */}
                    Switch account
                </Button>
                <Button
                    data-size="sm"
                    variant="tertiary"
                    className="ads:text-left"
                >
                    {/* <PencilWritingIcon aria-hidden /> */}
                    Log out
                </Button>
            </div>
        </>
    );
};

// const UserMenuButton = forwardRef((props: UserMenuButtonsProps, ref: ForwardedRef<HTMLButtonElement>) => {

//   const { children, userImage, ...delegated } = props;

//   return (
//     <UserMenuButtonContainer ref={ref} {...delegated}>
//       <Avatar image={userImage}>{userImage ? undefined : children}</Avatar>
//       <ExpandMoreIcon size={24} color={theme.aibel.colorV3.text.neutral.onBase} />
//     </UserMenuButtonContainer>
//   );
// });

/**
 * Component that displays an avatar button and triggers the user menu popover menu when active.
 * The component emits data on switch account and logout.
 *
 * @param props
 * @constructor
 */
export const UserMenu = forwardRef((props: UserMenuContentProps) => {
    // const { ...delegated } = props;

    return (
        <Popover
            triggerProps={{ inline: true }}
            placement={"bottom-end"}
            heading={
                <Avatar
                    data-color="info"
                    data-size="sm"
                    variant="circle"
                    aria-label={props.userName}
                    aria-hidden
                    initials={getInitials(props.userName)}
                >
                    <Base64ImageDisplay
                        alt="Kari Norman"
                        base64String={
                            "data:image/jpeg;base64,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"
                        }
                    />
                </Avatar>
            }
        >
            <UserMenuContent {...props} />
        </Popover>
    );
});

const UserMenuContent = ({ userName, userEmail, userImage }: UserMenuContentProps) => {
    return (
        <div className="ads:flex ads:flex-col ads:gap-2 ads:w-full">
            <UserMenuContentHeaderBar
                userImage={userImage}
                userName={userName}
                userEmail={userEmail}
            />
            <Divider />
            {/* <div>
        {handleSwitchAccount && (
          <Button
            variant={"popover"}
            sizeVariant={"popover"}
            iconPlacement={"left"}
            icon={<SwitchAccountIcon size={20} />}
            onClick={handleSwitchAccount}
          >
            {switchAccountLabel?.length ? switchAccountLabel : "Switch account"}
          </Button>
        )}
        {customMenuContent &&
          customMenuContent.map(
            ({ label, icon, handleClick, popoverContent, disabled }) => (
              <ConditionalWrapper
                key={label}
                condition={!!popoverContent}
                wrapper={(c) => (
                  <Popover placement="left" content={popoverContent}>
                    {c}
                  </Popover>
                )}
              >
                <Button
                  variant={"popover"}
                  sizeVariant={"popover"}
                  iconPlacement={"left"}
                  icon={icon}
                  onClick={!popoverContent ? handleClick : undefined}
                  disabled={disabled}
                >
                  {label ? label : ""}
                </Button>
              </ConditionalWrapper>
            ),
          )}
        <Button
          variant={"popover"}
          sizeVariant={"popover"}
          iconPlacement={"left"}
          icon={<MoveItemIcon size={20} />}
          onClick={handleLogout}
        >
          {logoutLabel?.length ? logoutLabel : "Log out"}
        </Button>
      </div> */}
        </div>
    );
};
