// import styles from "./LangSwitcher.module.scss";
import LangSwitcherSelect from "@/app/componentes/header/LangSwitcherSelect";
import { routing } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

export default function LangSwitcher() {
  const t = useTranslations("LangSwitcher");
  const locale = useLocale();
  return (
    <div>
      <LangSwitcherSelect
        defaultLocale={locale}
        label={t("label")}
      >
        {routing.locales.map((cur) => (
          <option
            key={cur}
            value={cur}
          >
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LangSwitcherSelect>
    </div>
  );
}
