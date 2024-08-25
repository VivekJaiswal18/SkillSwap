import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <ClerkProvider> */}
        <body>{children}</body>
      {/* </ClerkProvider> */}
    </html>
  );
}
