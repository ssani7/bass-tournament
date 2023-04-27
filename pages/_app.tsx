import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import type { AppProps } from 'next/app';
import { Inter, Anton } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anton = Anton({
   weight: '400',
   subsets: ['latin'],
   variable: '--font-anton',
});

console.log(inter);
console.log(anton);
export default function App({ Component, pageProps }: AppProps) {
   return (
      <main className={`${inter.variable} ${anton.variable} font-sans`}>
         <Component {...pageProps} />
      </main>
   );
}
