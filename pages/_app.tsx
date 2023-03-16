import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Anton } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans ${anton.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}
