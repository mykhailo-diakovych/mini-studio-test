import React, { useEffect } from "react";
import gsap from "gsap";

interface IUseGlobalParallaxOptions {
   intensity?: number; // default 20
   reverse?: boolean; // default true
}

export const useGlobalParallax = <T>(
   ref: React.RefObject<T | null>,
   options: IUseGlobalParallaxOptions = {},
) => {
   useEffect(() => {
      const target = ref.current;
      if (!target) return;

      const intensity = options.intensity ?? Math.random() * 10 + 10; // 10–20
      const reverse = options.reverse ?? true;

      const xQuick = gsap.quickTo(target, "x", {
         duration: 0.6,
         ease: "power3.out",
      });

      const yQuick = gsap.quickTo(target, "y", {
         duration: 0.6,
         ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
         const { innerWidth, innerHeight } = window;
         const x = (e.clientX / innerWidth - 0.5) * intensity;
         const y = (e.clientY / innerHeight - 0.5) * intensity;

         const factor = reverse ? -1 : 1;
         xQuick(x * factor);
         yQuick(y * factor);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
   }, [ref, options.intensity, options.reverse]);
};
