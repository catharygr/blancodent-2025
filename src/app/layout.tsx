// Dado que tenemos una página raíz `not-found.tsx`, se requiere un archivo de layout,
// incluso si solo está pasando los hijos.

export default function NotFoundLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
