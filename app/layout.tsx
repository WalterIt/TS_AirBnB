import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import RentModal from "@/components/modals/RentModal";
import ToasterProvider from "@/providers/ToasterProvider";
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

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
