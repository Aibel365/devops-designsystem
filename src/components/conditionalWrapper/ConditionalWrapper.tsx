import { ReactElement } from "react";

interface IConditionalWrapper {
    condition?: boolean;
    wrapper: (children: ReactElement) => ReactElement;
    children: ReactElement;
}

export const ConditionalWrapper: React.FC<IConditionalWrapper> = ({ condition, wrapper, children }) => {
    return condition ? wrapper(children) : children;
};
