import { forwardRef, ReactElement } from "react";
import { Divider, Popover } from "../../atoms";
import { getInitials } from "./getInitials";
import { Avatar } from "@digdir/designsystemet-react";

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

const UserMenuContentHeaderBar = ({
  userName,
  userEmail,
  userImage,
}: UserMenuContentHeaderBarProps) => {
  return (
    <div className="ads:flex ads:gap-4 ads:p-4">
      <Avatar aria-hidden initials={getInitials(userName)}></Avatar>
      <div className="ads:flex ads:flex-col ads:py-2">
        {userName}
        {userEmail}
      </div>
    </div>
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
export const UserMenu = forwardRef((props: UserMenuContentProps, _) => {
  // const { ...delegated } = props;

  return (
    <Popover
      triggerProps={{ inline: true, "data-color": "none" }}
      placement={"bottom-end"}
      heading={
        <Avatar
          data-size="sm"
          variant="circle"
          aria-hidden
          initials={getInitials(props.userName)}
        ></Avatar>
      }
    >
      <UserMenuContent {...props} />
    </Popover>
  );
});

const UserMenuContent = ({
  userName,
  userEmail,
  userImage,
  handleSwitchAccount,
  switchAccountLabel,
  handleLogout,
  logoutLabel,
  customMenuContent,
}: UserMenuContentProps) => {
  return (
    <div className="ads:flex ads:flex-col ads:gap-2 ads:w-62.5">
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
