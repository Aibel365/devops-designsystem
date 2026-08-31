import { Search as DigdirSearch, SearchButton as DigdirSearchButton, SearchClear as DigdirSearchClear, SearchInput, type SearchButtonProps, type SearchClearProps, type SearchInputProps, type SearchProps } from "@digdir/designsystemet-react";
import { forwardRef, type ComponentRef } from "react";

export { SearchInput, type SearchButtonProps, type SearchClearProps, type SearchInputProps, type SearchProps };

// Default English button text. Consumers can override it via `children`.
export const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(function SearchButton({ children = "Search", ...rest }, ref) {
    return (
        <DigdirSearchButton
            ref={ref}
            {...rest}
        >
            {children}
        </DigdirSearchButton>
    );
});

// Default English clear label. Consumers can override it via `aria-label`.
export const SearchClear = forwardRef<HTMLButtonElement, SearchClearProps>(function SearchClear({ "aria-label": ariaLabel = "Clear", ...rest }, ref) {
    return (
        <DigdirSearchClear
            ref={ref}
            aria-label={ariaLabel}
            {...rest}
        />
    );
});

const SearchRoot = forwardRef<ComponentRef<typeof DigdirSearch>, SearchProps>(function Search(props, ref) {
    return (
        <DigdirSearch
            ref={ref}
            {...props}
        />
    );
});

export const Search = Object.assign(SearchRoot, {
    Button: SearchButton,
    Clear: SearchClear,
    Input: SearchInput
});
