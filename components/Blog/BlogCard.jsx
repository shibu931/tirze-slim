import React from 'react';
import Image from 'next/image';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const BlogCard = async ({ ogImage, title, date, metaDescription, slug }) => {
  const locale = await getLocale()
  return (
    <div className="bg-white border border-gray-300 shadow-md shadow-gray-300 overflow-hidden flex flex-col">
      {ogImage && (
        <div className="relative h-48 w-full">
          <Image
            src={ogImage}
            alt={title || "Blog Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        {title && <h2 className="text-lg font-semibold"><Link href={"/blogs/"+slug}>{title}</Link></h2>}
        {date && <p className="text-sm text-gray-500">{date}</p>}
        <hr className='border-gray-300 my-2'/>
        {metaDescription && <p className="text-neutral-700 text-sm flex-1">{metaDescription}</p>}
        <Link href={"/blogs/"+slug} locale={locale} className="mt-4 bg-rose-600 hover:bg-rose-600 transition-colors duration-200 ease-in-out text-white text-center font-bold py-2 px-4 text-sm hover:cursor-pointer">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;