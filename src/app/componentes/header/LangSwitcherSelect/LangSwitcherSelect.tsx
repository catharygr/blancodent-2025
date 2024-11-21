"use client";
import React, { ReactNode } from "react";

// import styles from "./LangSwitcherSelect.module.scss";

export default function LangSwitcherSelect({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <select>{children}</select>
    </div>
  );
}
