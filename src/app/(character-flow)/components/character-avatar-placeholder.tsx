"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { useGlobalParallax } from "@/hooks/use-global-parallax";

export const CharacterAvatarPlaceholder = () => {
   const imageRef = useRef<HTMLDivElement>(null);

   useGlobalParallax<HTMLDivElement>(imageRef, {
      intensity: 18,
      reverse: true,
   });

   return (
      <section className="relative h-100 w-full overflow-hidden rounded-lg bg-[linear-gradient(1deg,rgba(178,178,239,1)_0%,rgba(216,216,247,1)_100%)] lg:h-113 lg:w-96 lg:rounded-l-none">
         <div className="flex justify-center p-6 lg:p-10">
            <div className="relative w-full max-w-xs">
               <Card className="relative z-10 max-w-72 overflow-hidden rounded-none rounded-tl-xl rounded-br-xl border border-white bg-[linear-gradient(90deg,rgba(243,236,249,1)_0%,rgba(255,240,254,1)_100%)] p-0 shadow-md shadow-indigo-400/40 lg:max-w-xs">
                  <CardContent className="space-y-1 p-3 lg:p-4">
                     <h2 className="text-primary-indigo text-sm leading-5 font-bold lg:text-base lg:leading-6">
                        Hi, I am Purp!
                     </h2>
                     <p className="text-primary-indigo text-sm leading-5 font-normal italic lg:text-base lg:leading-6">
                        Your character will appear here
                        <br />
                        as soon as it is ready!
                     </p>
                  </CardContent>
               </Card>
            </div>

            <div className="absolute -bottom-2 left-1/2 w-full max-w-72 -translate-x-1/2 transform lg:max-w-76">
               <div
                  ref={imageRef}
                  className="relative h-84 w-full will-change-transform"
               >
                  <Image
                     fill
                     priority
                     className="object-cover"
                     alt="Purp showing down"
                     src="/images/purp-showing-down.avif"
                     sizes="(max-width: 1024px) 18rem, 19rem"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
