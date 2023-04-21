import Image from 'next/image';

type BlogCardProps = {
   src: string;
   name: string;
};

export const BlogCard = ({ src, name }: BlogCardProps) => {
   return (
      <div className="bg-white h-[340px] w-full md:w-96 rounded-md shadow-md relative mr-6">
         <div className="relative pt-[55.556%] mb-4 overflow-hidden will-change-transform">
            <div className="absolute top-2/4 left-2/4 block h-full w-full max-w-none translate-x-[-50%] translate-y-[-50%]">
               <Image className="object-cover" src={src} alt={name} fill />
            </div>
         </div>
         <div className="relative px-5">
            <div className="text-lg font-semibold mb-4 text-[rgb(38,38,38)]">
               {name}
            </div>
         </div>
      </div>
   );
};
