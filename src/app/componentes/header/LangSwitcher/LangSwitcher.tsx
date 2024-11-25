import styles from "./LangSwitcher.module.css";
import LangSwitcherSelect from "@/app/componentes/header/LangSwitcherSelect";
import { routing } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";

export default function LangSwitcher() {
  const t = useTranslations("LangSwitcher");
  const locale = useLocale();
  return (
    <div>
      <LangSwitcherSelect
        defaultValue={locale}
        label={t("label")}
      >
        {routing.locales.map((lang) => (
          <option
            key={lang}
            value={lang}
            className={styles.option}
          >
            {t("locale", { locale: lang })}
          </option>
        ))}
      </LangSwitcherSelect>
    </div>
  );
}
