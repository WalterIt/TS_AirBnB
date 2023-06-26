import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import Modal from "@/components/modals/Modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "TS AirBnb",
  description: "Created by Valto Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal actionLabel="Submit" isOpen title="My Modal" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
