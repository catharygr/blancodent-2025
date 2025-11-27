"use client";
import styles from "./LangSwitcherSelect.module.css";
import React, { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
// import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";

export default function LangSwitcherSelect({
  children,
  defaultValue,
  label,
}: {
  children: ReactNode;
  defaultValue: string;
  label: string;
}) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  function handleLangChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLanguage = event.target.value as string;
    startTransition(() =>
      // @ts-expect-error -- Expected error...
      router.replace({ pathname, params }, { locale: nextLanguage })
    );
  }

  return (
    <section
      aria-labelledby="lang-switcher-label"
      className={styles.container}
    >
      <span
        className="visually-hidden"
        id="lang-switcher-label"
      >
        {label}
      </span>
      <label
        htmlFor="lang-switcher"
        className="visually-hidden"
      >
        {label}
      </label>
      <select
        id="lang-switcher"
        className={`${styles.select} ${isPending && styles.pending}`}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleLangChange}
      >
        {children}
      </select>
    </section>
  );
}
