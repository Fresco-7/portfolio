import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Poppins({ subsets: ["latin"], weight: '500' });

export const metadata: Metadata = {
  title: "João Fresco",
  description: "João Fresco's Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme={'sytem'}
          disableTransitionOnChange>
          <Navbar />
          <main className="xl:px-64 md:px-56 px-16 md:mt-16 mb-16">
            {children}
          </main>
        </ThemeProvider>
      </body>

    </html>
  );
}
