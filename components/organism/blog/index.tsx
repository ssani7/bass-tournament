import { BlogCard } from '@/components/molecules/card/blog';
import clsx from 'clsx';
import Link from 'next/link';

export const Blog = () => {
   const Blog = [
      {
         src: 'https://cdn01.x-plarium.com/browser/content/blog/images/2023/shooting-games.webp',
         name: 'The Best PC Games Ever – And a Few New Ones',
      },
      {
         src: 'https://cdn01.x-plarium.com/browser/content/blog/images/2023/popular-games.webp',
         name: 'Popular Games 2023',
      },
      {
         src: 'https://cdn01.x-plarium.com/browser/content/blog/images/2023/pc-games.webp',
         name: 'The 7 Best Adventure Games of 2023',
      },
   ];
   return (
      <section className="bg-[240,240,240] overflow-hidden">
         <div className="max-w-5xl w-full mx-auto py-6 pt-8 pb-20">
            <div className="">
               <div className="flex items-center justify-between mb-5">
                  <div className="text-center uppercase mx-auto text-[rgb(33,33,33)] font-extrabold text-4xl">
                     Blog
                  </div>
               </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mx-5">
               {Blog.map((blog) => (
                  <BlogCard key={blog.name} {...blog} />
               ))}
            </div>
            <div className="mt-8 flex justify-center">
               <Link
                  href={'/'}
                  className={clsx(
                     'inline-flex bg-white',
                     'text-[rgb(31,124,223)]',
                     'items-center font-semibold',
                     'justify-center relative text-xl',
                     'px-5 rounded-md shadow-lg min-h-[50px] min-w-[140px]',
                     'hover:bg-[#f4f4f4]',
                  )}
               >
                  See all
               </Link>
            </div>
         </div>
      </section>
   );
};
