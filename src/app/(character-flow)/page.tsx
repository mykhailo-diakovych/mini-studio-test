import { CharacterAvatarPlaceholder } from "@/app/(character-flow)/components/character-avatar-placeholder";
import { CharacterCreationCard } from "@/app/(character-flow)/components/character-creation-card/character-creation-card";
import { Decor } from "@/components/layout/decor";

export default function Home() {
   return (
      <main className="relative z-10 flex justify-center px-4 py-8 lg:py-16">
         <div className="absolute top-0 right-0 -z-10">
            <Decor />
         </div>
         <div className="w-full max-w-3xl">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-md shadow-indigo-400/40 lg:flex-row lg:bg-transparent">
               <CharacterCreationCard />

               <CharacterAvatarPlaceholder />
            </div>
         </div>
      </main>
   );
}
