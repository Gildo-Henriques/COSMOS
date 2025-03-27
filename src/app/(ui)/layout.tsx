import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {

  title: "COSMOS-app",
  description: "Plataforma de conexão",
  icons: {
    icon: "/cosmos-head.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`} 
      >
        <main className="flex w-full ">
          <Navbar />
        {children}
        </main>
      </body>
    </html>
  );
}
