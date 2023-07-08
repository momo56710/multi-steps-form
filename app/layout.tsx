import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <main className=" h-screen flex justify-center items-center text-black ">
          <div className="md:h-4/5  w-5/6 max-h-[600px] max-w-screen-lg bg-white rounded-xl grid md:grid-cols-7 max-md:mt-5  gap-2 md:p-6 pt-6">
            <div className="md:col-span-2 max-md:absolute max-md:flex  max-md:top-0 max-md:left-0  max-md:w-screen max-md:h-[20em] max-md:z-[-1]">
              <NavBar />
            </div>
            <div className="md:col-span-5 max-md:row-span-3">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
