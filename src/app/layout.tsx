// Layout only for 404 page. Iy just passes children to the page.

export default async function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
