import englishTranslations from "./locales/en.json";
import norwegianBokmalTranslations from "./locales/no.json";

export type AibelTranslations = typeof englishTranslations;

export const aibelTranslations = {
    en: englishTranslations,
    nb: norwegianBokmalTranslations,
    no: norwegianBokmalTranslations
} satisfies Record<string, AibelTranslations>;

export type AibelLocale = keyof typeof aibelTranslations;
