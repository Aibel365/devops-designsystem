// import { ForwardedRef, forwardRef, ReactElement } from "react";
// import { Button, Divider } from "../../atoms";
// import { MoveItemIcon, SwitchAccountIcon } from "../../../../../icons";

// import { ConditionalWrapper } from "../../../../../utilities";
// import { Popover } from "../../../../../molecules";

// export interface UserMenuButtonsProps {
//   children?: string;
//   userImage?: string;
// }

// export interface UserMenuContentHeaderBarProps {
//   userName?: string;
//   userEmail?: string;
//   userImage?: string;
// }

// export type CustomMenuContentConfig = {
//   label?: string;
//   icon?: string | ReactElement;
//   handleClick?: () => void;
//   popoverContent?: React.ReactNode;
//   disabled?: boolean;
// };

// const UserMenuContent = ({
//   userName,
//   userEmail,
//   userImage,
//   handleSwitchAccount,
//   switchAccountLabel,
//   handleLogout,
//   logoutLabel,
//   customMenuContent,
// }: UserMenuContentProps) => {
//   const theme = useTheme();

//   return (
//     <Box display={"flex"} flexDirection={"column"} gap={theme.aibel.spacing.base} width={"250px"}>
//       <UserMenuContentHeaderBar userImage={userImage} userName={userName} userEmail={userEmail} />
//       <Divider color={theme.aibel.colorV3.surface.disabled} />
//       <Box>
//         {handleSwitchAccount && (
//           <Button
//             variant={"popover"}
//             sizeVariant={"popover"}
//             iconPlacement={"left"}
//             icon={<SwitchAccountIcon size={20} />}
//             onClick={handleSwitchAccount}
//           >
//             {switchAccountLabel?.length ? switchAccountLabel : "Switch account"}
//           </Button>
//         )}
//         {customMenuContent &&
//           customMenuContent.map(({ label, icon, handleClick, popoverContent, disabled }) => (
//             <ConditionalWrapper
//               key={label}
//               condition={!!popoverContent}
//               wrapper={(c) => (
//                 <Popover placement="left" content={popoverContent}>
//                   {c}
//                 </Popover>
//               )}
//             >
//               <Button
//                 variant={"popover"}
//                 sizeVariant={"popover"}
//                 iconPlacement={"left"}
//                 icon={icon}
//                 onClick={!popoverContent ? handleClick : undefined}
//                 disabled={disabled}
//               >
//                 {label ? label : ""}
//               </Button>
//             </ConditionalWrapper>
//           ))}
//         <Button
//           variant={"popover"}
//           sizeVariant={"popover"}
//           iconPlacement={"left"}
//           icon={<MoveItemIcon size={20} />}
//           onClick={handleLogout}
//         >
//           {logoutLabel?.length ? logoutLabel : "Log out"}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// const UserMenuContentHeaderBar = ({ userName, userEmail, userImage }: UserMenuContentHeaderBarProps) => {
//   const theme = useTheme();

//   return (
//     <Box display={"flex"} gap={theme.aibel.spacing.l} spacing={{ p: theme.aibel.spacing.base }}>
//       <Avatar image={userImage} variant={"large"}>
//         {getInitials(userName)}
//       </Avatar>
//       <Box display={"flex"} flexDirection={"column"} spacing={{ py: theme.aibel.spacing.s }}>
//         <Text variant={"body-large"} wordBreak={"break-word"} color={theme.aibel.colorV3.text.neutral.base}>
//           {userName}
//         </Text>
//         <Text variant={"body-small"} wordBreak={"break-all"} color={theme.aibel.colorV3.text.neutral.subtle}>
//           {userEmail}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default UserMenuContent;
