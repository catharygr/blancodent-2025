import styles from "./SkipLink.module.css";
import { Link } from "@/i18n/navigation";

export default function SkipLink({
  link,
  content,
}: {
  link: string;
  content: string;
}) {
  return (
    <Link
      className={`${styles.visuallyHidden} ${styles.skipLink}`}
      href={`#${link}`}
    >
      {content}
    </Link>
  );
}
