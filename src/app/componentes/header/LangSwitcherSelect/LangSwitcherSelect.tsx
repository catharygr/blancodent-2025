"use client";
import React, { ReactNode, ChangeEvent, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import styles from "./LangSwitcherSelect.module.css";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

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
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanhChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value as string;
    startTransition(() => {
      // @ts-expect-error -- se espera un error (todo en orden)
      router.replace({ pathname, params }, { locale: nextLanguage });
    });
  };
  return (
    <div className={styles.container}>
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
        onChange={handleLanhChange}
        disabled={isPending}
      >
        {children}
      </select>
      <CaretDown weight="fill" />
    </div>
  );
}
