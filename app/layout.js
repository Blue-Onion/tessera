
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import DarkVeil from "@/components/DarkVeil";


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div className="relative w-screen h-screen overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 z-0">
            <DarkVeil speed={3}
            />
          </div>


          <div className="relative z-10">
            <Navbar />

            <main className="w-full h-full mt-16">

              {children}
            </main>
          </div>
        </div>


      </body>
    </html>
  );
}
