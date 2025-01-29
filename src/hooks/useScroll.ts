import { useRef } from "react";

export const useScroll = () => {
  const scrollToRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return { scrollToRef: scrollToRef, scrollTo };
};
