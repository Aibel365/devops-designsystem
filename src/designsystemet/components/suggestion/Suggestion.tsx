import {
    EXPERIMENTAL_Suggestion as DigdirSuggestion,
    EXPERIMENTAL_SuggestionClear as DigdirSuggestionClear,
    EXPERIMENTAL_SuggestionList as DigdirSuggestionList,
    EXPERIMENTAL_SuggestionToggle as DigdirSuggestionToggle,
    EXPERIMENTAL_SuggestionEmpty,
    EXPERIMENTAL_SuggestionInput,
    EXPERIMENTAL_SuggestionOption,
    type SuggestionClearProps,
    type SuggestionEmptyProps,
    type SuggestionInputProps,
    type SuggestionItem,
    type SuggestionListProps,
    type SuggestionMultipleProps,
    type SuggestionOptionProps,
    type SuggestionProps,
    type SuggestionSingleProps,
    type SuggestionToggleProps
} from "@digdir/designsystemet-react";
import { forwardRef, type ComponentRef } from "react";

export {
    EXPERIMENTAL_SuggestionEmpty,
    EXPERIMENTAL_SuggestionInput,
    EXPERIMENTAL_SuggestionOption,
    type SuggestionClearProps,
    type SuggestionEmptyProps,
    type SuggestionInputProps,
    type SuggestionItem,
    type SuggestionListProps,
    type SuggestionMultipleProps,
    type SuggestionOptionProps,
    type SuggestionProps,
    type SuggestionSingleProps
};

// Default English clear label. Consumers can override it via `aria-label`.
export const EXPERIMENTAL_SuggestionClear = forwardRef<HTMLButtonElement, SuggestionClearProps>(function SuggestionClear({ "aria-label": ariaLabel = "Clear", ...rest }, ref) {
    return (
        <DigdirSuggestionClear
            ref={ref}
            aria-label={ariaLabel}
            {...rest}
        />
    );
});

// Default English screen reader labels. Consumers can override them via `singular` and `plural`.
export const EXPERIMENTAL_SuggestionList = forwardRef<HTMLDataListElement, SuggestionListProps>(function SuggestionList({ singular = "%d suggestions", plural = "%d suggestions", ...rest }, ref) {
    return (
        <DigdirSuggestionList
            ref={ref}
            singular={singular}
            plural={plural}
            {...rest}
        />
    );
});

// Default English toggle label. Consumers can override it via `aria-label`.
export const EXPERIMENTAL_SuggestionToggle = forwardRef<HTMLButtonElement, SuggestionToggleProps>(function SuggestionToggle({ "aria-label": ariaLabel = "Options", ...rest }, ref) {
    return (
        <DigdirSuggestionToggle
            ref={ref}
            aria-label={ariaLabel}
            {...rest}
        />
    );
});

const SuggestionRoot = forwardRef<ComponentRef<typeof DigdirSuggestion>, SuggestionProps>(function Suggestion(props, ref) {
    return (
        <DigdirSuggestion
            ref={ref}
            {...props}
        />
    );
});

export const EXPERIMENTAL_Suggestion = Object.assign(SuggestionRoot, {
    Clear: EXPERIMENTAL_SuggestionClear,
    Empty: EXPERIMENTAL_SuggestionEmpty,
    Input: EXPERIMENTAL_SuggestionInput,
    List: EXPERIMENTAL_SuggestionList,
    Option: EXPERIMENTAL_SuggestionOption,
    Toggle: EXPERIMENTAL_SuggestionToggle
});
