import React from "react";
import Image from "next/image";

export const Decor = () => {
   return (
      <div className="relative h-full w-full">
         <div className="relative left-162 h-42 w-52">
            <Image
               fill
               className="object-cover"
               alt="Stars"
               src="/icons/stars.svg"
               sizes="13rem"
            />
         </div>

         <div className="relative -top-180 left-200 h-225 w-225 shrink-0 rounded-full border border-white shadow-sm shadow-white blur-xs" />
      </div>
   );
};
