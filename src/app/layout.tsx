import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínica Dental Blancodent - Tus dentistas en Las Palmas",
  description:
    "Clínica dental en Las Palmas, BLANCODENT. Dentistas en Las Palmas. Dentistas en Mesa y López. Expertos en ortodoncia, endodoncia, tratamiento del bruxismo, periodoncia e implantología dental. Puedes encontrar todas las especialidades odontológicas en BLANCODENT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
