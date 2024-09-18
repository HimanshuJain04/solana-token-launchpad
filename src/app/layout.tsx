import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { CustomWalletProvider } from "@/providers/CustomWalletProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <CustomWalletProvider>
          <div className="flex flex-col justify-start min-h-screen w-full">
            <Navbar />
            <div className="flex-grow ">{children}</div>
          </div>
        </CustomWalletProvider>
      </body>
    </html>
  );
}
