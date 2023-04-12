import { Noto_Sans } from "next/font/google";
import Header from "./components/Header/Header";
import "./styles/globals.scss";

const noto = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next13 - TV Show App",
  description: "TV Show web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header />
        <main id="mainContent" role="main" className="c-main c-main--container">
          {children}
        </main>
      </body>
    </html>
  );
}
