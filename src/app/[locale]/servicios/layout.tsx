import styles from "./layout.module.css";
export default async function ServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${styles.container} wide-grid`}> {children}</div>;
}
