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
        <main className="max-h-fit min-h-screen w-screen flex justify-center items-center text-black max-md:flex-col  max-md:absolute bg-LightBlue z-[-2]">
          <div className="h-[10em] w-screen md:hidden"></div>
          <div className="md:h-4/5  w-5/6 md:max-h-[600px] max-w-screen-lg min-h-fit bg-white rounded-xl grid md:grid-cols-7 max-md:mt-[1em]  gap-2 md:p-6 pt-6 ">
            <div className="md:col-span-2 max-md:absolute max-md:flex  max-md:top-0 max-md:left-0  max-md:w-screen max-md:h-[20em] max-md:z-[-1] ">
              <NavBar />
            </div>
            <div className="md:col-span-5 max-md:min-h-[400px] md:min-h-[450px] min-h-fit py-6 max-md:row-span-3">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
