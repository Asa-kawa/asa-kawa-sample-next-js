import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sample-next-js",
  description: "まだ作っている途中です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>{children}</body>
    </html>
  );
}
