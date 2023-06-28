import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import { data } from "autoprefixer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "TS AirBnb",
  description: "Created by Valto Silva",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  console.log(data);

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
