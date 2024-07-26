import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


export default function DashboardLayout({
    children
}: Readonly<{children: React.ReactNode}>) {

    return (

            <html lang="en">
            <body className="max-w-7xl m-auto min-h-screen overflow-x-hidden flex flex-col p-0">
                <Header/>
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </body>
            </html>
    )
}