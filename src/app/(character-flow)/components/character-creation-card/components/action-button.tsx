import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface IActionButtonProps extends React.ComponentProps<typeof Button> {
   src: string;
   alt: string;
   text: string;
}

export const ActionButton = ({
   src,
   alt,
   text,
   ...props
}: IActionButtonProps) => {
   return (
      <Button
         variant="outline"
         className="hover:border-primary-indigo hover:bg-light-grayish-blue bg-light-grayish-blue flex h-16 w-full cursor-pointer items-center justify-start gap-3 rounded-lg border-2 border-solid border-white px-4 py-0 shadow-sm shadow-indigo-400/40 transition-colors"
         {...props}
      >
         <div className="relative h-5 w-5 flex-shrink-0">
            <Image fill className="object-cover" alt={alt} src={src} />
         </div>

         <span className="text-primary-indigo text-base leading-6 font-semibold">
            {text}
         </span>
      </Button>
   );
};
