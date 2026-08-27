import { Field, FieldAffix, FieldAffixes, FieldCounter, FieldDescription, Input, Label, Textarea, ValidationMessage, type InputProps, type TextareaProps, type TextfieldProps } from "@digdir/designsystemet-react";
import { forwardRef, type Ref } from "react";

import { useAibelTranslations } from "../../i18n/AibelTranslationProvider";

export type { TextfieldProps };

const LocalizedCounter = ({ counter }: Pick<TextfieldProps, "counter">) => {
    const translations = useAibelTranslations().textfield.counter;

    if (!counter) {
        return null;
    }

    const props = typeof counter === "number" ? { limit: counter, ...translations } : { ...counter, under: counter.under ?? translations.under, over: counter.over ?? translations.over };

    // Designsystemet does not observe template attribute changes, so remount the counter when its translations change.
    return (
        <FieldCounter
            key={JSON.stringify([props.under, props.over])}
            {...props}
        />
    );
};

export const Textfield = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextfieldProps>(function Textfield({ label, description, error, multiline, prefix, suffix, "data-color": color, "data-size": size, counter, style, className, ...rest }, ref) {
    return (
        <Field
            className={className}
            data-color={color}
            data-size={size}
            style={style}
        >
            {!!label && <Label>{label}</Label>}
            {!!description && <FieldDescription>{description}</FieldDescription>}
            <FieldAffixes>
                {prefix !== undefined && <FieldAffix>{prefix}</FieldAffix>}
                {multiline === true ? (
                    <Textarea
                        ref={ref as Ref<HTMLTextAreaElement>}
                        aria-invalid={Boolean(error) || undefined}
                        {...(rest as TextareaProps)}
                    />
                ) : (
                    <Input
                        ref={ref as Ref<HTMLInputElement>}
                        aria-invalid={Boolean(error) || undefined}
                        {...(rest as InputProps)}
                    />
                )}
                {suffix !== undefined && <FieldAffix>{suffix}</FieldAffix>}
            </FieldAffixes>
            <LocalizedCounter counter={counter} />
            {!!error && <ValidationMessage>{error}</ValidationMessage>}
        </Field>
    );
});
