import { GamesPromotions, Header, Hero } from '@/components/molecules';
import { AllGames } from '@/components/molecules/games';
import { Benefits } from '@/components/organism/benefits';
import { Blog } from '@/components/organism/blog';
import { CrossPlatformSection } from '@/components/organism/crossplatform';
import { Footer } from '@/components/organism/footer';
import { Promotion } from '@/data';
import Head from 'next/head';
import { Partners } from '@/components/organism/partners';
import { useRef } from 'react';

export default function Home() {
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const partnerRef = useRef(null);

   const handleScrollTo = (ref: any) => {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
   };
   return (
      <>
         <Head>
            <title>Bass</title>
            <meta
               name="description"
               content="Bass is a revolutionary Web3 fishing game that offers the perfect blend of entertainment and blockchain technology"
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
         </Head>
         <div className="pt-[55px]  relative flex flex-col min-h-screen h-auto bg-[rgb(25,27,31)]">
            <Header
               handleScrollTo={handleScrollTo}
               homeRef={homeRef}
               aboutRef={aboutRef}
               partnerRef={partnerRef}
            />
            <div
               ref={homeRef}
               className="flex flex-col bg-[rgb(240,240,240)] flex-grow-[1] flex-shrink-0"
            >
               <div className="relative">
                  <Hero />
                  {Promotion.map((data, i) => {
                     if (i === 1)
                        return (
                           <GamesPromotions
                              key={data.name}
                              className="flex-row-reverse"
                              {...data}
                           />
                        );

                     return <GamesPromotions key={data.name} {...data} />;
                  })}
                  {/* <AllGames /> */}
               </div>
               <div ref={aboutRef}>
                  <Benefits />
               </div>
               <CrossPlatformSection />
               <div ref={partnerRef} className=" pt-[40px] pb-[120px]">
                  <div className="text-black font-extrabold text-4xl mb-10 text-center">
                     Investors
                  </div>
                  <Partners />
               </div>
               {/* <Blog /> */}

               <Footer />
            </div>
         </div>
      </>
   );
}
