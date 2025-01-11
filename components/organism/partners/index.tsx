import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import partner1 from '../../../public/images/partners/lc.webp';
import partner2 from '../../../public/images/partners/nexg.jpg';
import partner3 from '../../../public/images/partners/ma.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';

const partners = [
   { name: 'NexGami', photo: partner2, link: 'https://www.nexgami.com/' },
   { name: 'Ledger Capital', photo: partner1, link: 'https://ledgercap.co/' },
   { name: 'Metalpha', photo: partner3, link: 'https://www.metalpha.net/' },
];

export function Partners() {
   return (
      <div className="multislide max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-10 ">
         {partners.map((partner) => (
            <a key={partner.name} href={partner.link} target="_blank">
               <div>
                  <div className="w-[300px] px-8 py-4 rounded-xl overflow-hidden m-auto bg-white shadow-lg">
                     <Image
                        src={partner.photo}
                        alt={partner.name}
                        className="w-full !object-contain"
                     />
                     <div className="font-extrabold text-2xl leading-[100px] tracking-[2px] mb-3 text-black text-center">
                        {partner.name}
                     </div>
                  </div>
               </div>
            </a>
         ))}
      </div>
   );
}
