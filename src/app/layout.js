import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LEAD YOU – Learn Educate And Dignify",
  description: "An Islamic Institute in Gujranwala. Registration Open For Takhasus Fil Quran Wa-Tafseer Courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
      <Nav/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
