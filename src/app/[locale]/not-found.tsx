import { useTranslations } from "next-intl";
import { CSSProperties } from "react";
import { Link } from "@/i18n/navigation";

const styles: { container: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
  },
};

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <div style={styles.container}>
      <h1>{t("title")}</h1>
      <Link href="/">{t("homeLink")}</Link>
    </div>
  );
}
