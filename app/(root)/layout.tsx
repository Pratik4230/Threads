import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebarbar from "@/components/shared/LeftSidebar";
import RightSidebarbar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: 'Threads',
  description: 'A Next.js 14 Meta Threads Application'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
     
        <main className="flex flex-row" >
          <LeftSidebarbar/>

           <section className="main-container">
             <div className="w-full max-w-4xl">
               {children}
             </div>
           </section>

          <RightSidebarbar/>
        </main>

        <Bottombar/>
      
        
        </body>
    </html>
    </ClerkProvider>
  );
}
