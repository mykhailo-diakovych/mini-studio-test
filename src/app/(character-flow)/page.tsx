import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CharacterCreationCard } from "@/app/(character-flow)/components/character-creation-card";

export default function Home() {
   return (
      <main className="relative z-10 flex justify-center px-4 py-8 lg:py-16">
         <div className="w-full max-w-6xl">
            {/* Main content card */}
            <div className="shadow-shadow-primary-md flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white lg:flex-row lg:bg-transparent">
               {/* Left side - Form */}
               <Card className="lg:shadow-shadow-primary-md w-full rounded-lg border-none bg-white p-0 shadow-none lg:w-96 lg:rounded-r-none">
                  <CardContent className="space-y-6 p-6 lg:space-y-8 lg:p-12">
                     <h1 className="font-text-2xl-leading-8-font-black text-xl leading-7 font-black text-[#3e3ed8] lg:text-2xl lg:leading-8">
                        Create your Character
                     </h1>

                     <div className="flex w-full flex-col items-start space-y-3">
                        <label className="font-text-base-leading-6-font-semibold text-base leading-6 font-semibold text-[#3e3ed8]">
                           Character Name
                        </label>
                        <Input
                           className="shadow-shadow-neutral-sm h-10 w-full rounded border-2 border-solid border-[#b2b2ef] px-3 py-2 focus:border-[#3e3ed8] focus:ring-2 focus:ring-[#3e3ed8]/20"
                           placeholder="Write the name of your hero"
                        />
                     </div>

                     <div className="flex w-full flex-col items-start gap-4">
                        <label className="font-text-base-leading-6-font-semibold text-base leading-6 font-semibold text-[#3e3ed8]">
                           Choose how to bring your avatar to life
                        </label>

                        <Button
                           variant="outline"
                           className="shadow-shadow-secondary-sm flex h-16 w-full items-center justify-start gap-3 rounded-lg border-2 border-solid border-white bg-[#eaeafb] px-4 py-0 transition-colors hover:bg-[#dcdcf7]"
                        >
                           <UploadIcon className="h-5 w-5 flex-shrink-0 text-[#3e3ed8]" />
                           <span className="font-text-base-leading-6-font-semibold text-base leading-6 font-semibold text-[#3e3ed8]">
                              Upload a picture
                           </span>
                        </Button>

                        <Button
                           variant="outline"
                           className="shadow-shadow-secondary-sm flex h-16 w-full items-center justify-start gap-3 rounded-lg border-2 border-solid border-white bg-[#eaeafb] px-4 py-0 transition-colors hover:bg-[#dcdcf7]"
                        >
                           <img
                              className="h-5 w-5 flex-shrink-0"
                              alt="Ms icon duo"
                              src="/ms-icon-duo-generative-write.svg"
                           />
                           <span className="font-text-base-leading-6-font-semibold text-base leading-6 font-semibold text-[#3e3ed8]">
                              Describe with words
                           </span>
                        </Button>
                     </div>
                  </CardContent>
               </Card>

               <CharacterCreationCard />
            </div>
         </div>
      </main>
   );
}
