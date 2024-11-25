import LangSwitcherSelect from "@/app/componentes/header/LangSwitcherSelect";
import { routing } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

export default function LangSwitcher() {
  const t = useTranslations("LangSwitcher");
  const locale = useLocale();
  return (
    <LangSwitcherSelect
      defaultValue={locale}
      label={t("label")}
    >
      {routing.locales.map((lang) => (
        <option
          key={lang}
          value={lang}
        >
          {t("locale", { locale: lang })}
        </option>
      ))}
    </LangSwitcherSelect>
  );
}
