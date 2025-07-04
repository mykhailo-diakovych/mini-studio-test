import React from "react";
import Image from "next/image";

export const Header = () => {
   return (
      <header className="fixed top-0 z-10 flex w-full items-start gap-7 p-4 lg:p-5">
         <div className="relative h-12 w-20 lg:h-12 lg:w-22">
            <Image
               fill
               className="object-contain"
               alt="Logo ms"
               src="/icons/logo-ms.svg"
            />
         </div>
      </header>
   );
};
