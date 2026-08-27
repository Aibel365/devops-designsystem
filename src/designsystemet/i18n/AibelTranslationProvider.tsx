import { createContext, useContext, type PropsWithChildren } from "react";

import { aibelTranslations, type AibelLocale, type AibelTranslations } from "./translations";

const AibelTranslationContext = createContext<AibelTranslations>(aibelTranslations.nb);

export type AibelTranslationProviderProps = PropsWithChildren<{
    locale: AibelLocale;
}>;

export const AibelTranslationProvider = ({ children, locale }: AibelTranslationProviderProps) => <AibelTranslationContext.Provider value={aibelTranslations[locale]}>{children}</AibelTranslationContext.Provider>;

export const useAibelTranslations = () => useContext(AibelTranslationContext);
