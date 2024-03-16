import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/utils/cn";

const images = [
  {
    src: "https://images.unsplash.com/photo-1483197452165-7abc4b248905?q=80&w=1936&auto=format&fit=crop",
    alt: "mountain",
  },
  {
    src: "https://images.unsplash.com/photo-1470342495351-a5f90c5011cd?q=80&w=2070&auto=format&fit=crop",
    alt: "wood chips",
  },
  {
    src: "https://images.unsplash.com/photo-1621069016305-442eb83d84f6?q=80&w=1887&auto=format&fit=crop",
    alt: "metal pipe",
  },
  {
    src: "https://images.unsplash.com/photo-1621069481069-e1c600c246cc?q=80&w=2070&auto=format&fit=crop",
    alt: "craft",
  },
  {
    src: "https://images.unsplash.com/photo-1476683874822-744764a2438f?q=80&w=2070&auto=format&fit=crop",
    alt: "canisters",
  },
  {
    src: "https://images.unsplash.com/photo-1629215316987-aea1c88c50d7?q=80&w=2098&auto=format&fit=crop",
    alt: "dish",
  },
];

export function GalleryCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2500 }));

  return (
    <div className="flex justify-center mb-20">
      <Carousel
        className="w-full max-w-lg lg:max-w-3xl"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="ml-[1.5] md:ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="px-10 sm:pl-10 md:basis-1/2">
              <div className="flex aspect-square items-center justify-center">
                <BlurImage src={image.src} alt={image.alt} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="invisible border-black md:visible dark:bg-black dark:border-white" />
        <CarouselPrevious className="invisible border-black mr-4 md:visible dark:bg-black dark:border-white" />
      </Carousel>
    </div>
  );
}

const BlurImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <Image
      src={src}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover inset-0 h-full w-full transition duration-200 rounded-lg",
        loaded ? "blur-none" : "blur-md"
      )}
      alt={alt}
    />
  );
};
