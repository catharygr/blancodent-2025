"use client";
import React, { ReactNode, ChangeEvent } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

import styles from "./LangSwitcherSelect.module.css";

export default function LangSwitcherSelect({
  children,
  defaultValue,
  label,
}: {
  children: ReactNode;
  defaultValue: string;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  console.log("params", params);
  console.log("pathname", pathname);

  const handleLanhChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value as string;
    // @ts-expect-error -- se espera un error (todo en orden)
    router.replace({ pathname, params }, { locale: nextLanguage });
  };
  return (
    <>
      <label
        htmlFor="lang-switcher"
        className="visually-hidden"
      >
        {label}
      </label>
      <select
        id="lang-switcher"
        className={styles.select}
        defaultValue={defaultValue}
        onChange={handleLanhChange}
      >
        {children}
      </select>
    </>
  );
}
