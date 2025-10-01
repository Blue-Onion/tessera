import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import DarkVeil from "@/components/DarkVeil";

const inter = Inter({ subsets: ["latin"] });

// Metadata for Tessera
export const metadata = {
  title: "Tessera - AI Video Generator",
  description: "Create stunning videos with AI-generated animations and visuals using Tessera.",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" >
      <body className={`${inter.className} dark text-white`}>
        <div className="relative w-screen min-h-screen">
          {/* Background effect */}
          <div className="absolute inset-0 z-0">
            <DarkVeil speed={3} />
          </div>

          <div className="relative z-10">
            <Navbar />

            <main className="w-full min-h-screen ">{children}</main>

            <footer className="bg-muted/50 py-10">

              <div className="container mx-auto px-3 text-center text-gray-200">
                <p> © {new Date().getFullYear()} Blue Onion. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
