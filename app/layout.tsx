import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });


const font = localFont({
  src: '../public/font/monosan.woff2',
  display: 'auto'
})

export const metadata: Metadata = {
  title: "ChatWithPDF",
  description: "Your Interactive Document Companion!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en" className={font.className} >
        
        <body className="max-w-7xl m-auto min-h-screen overflow-x-hidden flex flex-col p-0 text-black">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
          
        </body>
      </html>
    
  );
}
