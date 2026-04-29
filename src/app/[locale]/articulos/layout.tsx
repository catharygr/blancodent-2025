import styles from "./layout.module.css";

export default async function ServiciosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${styles.container} wide-grid`}>{children}</main>;
}
