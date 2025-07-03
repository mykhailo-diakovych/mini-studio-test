import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ActionButton } from "@/app/(character-flow)/components/character-creation-card/components/action-button";

export const CharacterCreationCard = () => {
   return (
      <Card className="lg:shadow-shadow-primary-md w-full rounded-lg border-none bg-white p-0 shadow-none lg:w-96 lg:rounded-r-none">
         <CardContent className="space-y-6 px-3 py-6 lg:space-y-8 lg:px-5 lg:py-12">
            <h1 className="text-primary-indigo text-xl leading-7 font-black lg:text-2xl lg:leading-8">
               Create your Character
            </h1>

            <div className="flex w-full flex-col items-start space-y-3">
               <label
                  htmlFor="character-name"
                  className="text-primary-indigo text-base leading-6 font-semibold"
               >
                  Character Name
               </label>
               <Input
                  id="character-name"
                  className="focus:border-primary-indigo focus-visible:border-primary-indigo hover:border-primary-indigo border-blue h-10 w-full rounded border-2 border-solid px-3 py-2 transition-colors focus-visible:ring-0"
                  placeholder="Write the name of your hero"
               />
            </div>

            <div className="flex w-full flex-col items-start gap-4">
               <p className="text-primary-indigo text-base leading-6 font-semibold">
                  Choose how to bring your avatar to life
               </p>

               <ActionButton
                  src="/icons/picture-ms.svg"
                  alt="Ms picture"
                  text="Upload a picture"
               />

               <ActionButton
                  src="/icons/edit-ms.svg"
                  alt="Ms edit"
                  text="Describe with words"
               />
            </div>
         </CardContent>
      </Card>
   );
};
