import { Navbar } from "components/Navbar";
import { ReactNode } from "react";
import "styles/style.global.scss";
import { Bebas_Neue, Inter, Poppins } from "next/font/google";
import { Providers } from "context/Providers";
import { Notifications } from "components/Notifications";

const inter = Inter({ subsets: ["latin"] });

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "MVST Coffee",
  description: "Coffee Generator",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${bebas.variable} ${poppins.variable}`}
      >
        <Providers>
          <Navbar />
          <Notifications />
          {children}
        </Providers>
      </body>
    </html>
  );
}
