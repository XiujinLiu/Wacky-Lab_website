// app/vision/page.tsx


import Image from "next/image";
import { Fredoka, Inter } from "next/font/google";
import Link from "next/link";


const headerFont = Fredoka({ subsets: ["latin"], weight: ["600", "700"] });
const bodyFont = Inter({ subsets: ["latin"] });

export default function VisionPage() {
  return (
    <main className={`min-h-screen bg-[#fefdfa] text-gray-900 ${bodyFont.className}`}>
      <div className="mx-auto px-[8vw] py-[4vw] flex flex-col items-center gap-[1vw]">
        <div className="w-full flex flex-row items-baseline gap-[4vw]">
          <h1 
            className={`${headerFont.className} wl-fs-200 font-bold text-[#E85D4E] tracking-wider`}
            style={{ 
              textShadow: `
                0.15vw 0.15vw 0 #000, 
                -0.15vw -0.15vw 0 #000, 
                0.15vw -0.15vw 0 #000, 
                -0.15vw 0.15vw 0 #000, 
                0.15vw 0px 0 #000, 
                0px 0.15vw 0 #000, 
                -0.15vw 0px 0 #000, 
                0px -0.15vw 0 #000,
                0.4vw 0.4vw 0 #000
    `
            }}
          >
            QRAFTY
          </h1>
          <div className="flex flex-col gap-[1vw]">
            <h2 className="wl-fs-70 font-bold uppercase tracking-wide text-black">
              Crafting with Quality
            </h2>
            <p className="wl-fs-48 font-medium text-gray-600">
              Weaving Intelligence into Reality.
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src="/images/vision.png"
            alt="Qrafty Vision Illustration"
            width={2560}
            height={4000}
            className="w-full h-auto object-contain"
            priority
          />
          <div className="absolute top-[59vw] left-0 w-full text-center block">
            <h3 className="wl-fs-60 font-black uppercase text-black tracking-tight bg-[#fefdfa] inline-block backdrop-blur-sm">
              Stitching Life's Messy Corners
            </h3>
          </div>
          <div className="absolute top-[120vw] left-0 w-full text-center block">
            <h3 className="wl-fs-60 font-black uppercase text-black tracking-tight bg-[#fefdfa] inline-block backdrop-blur-sm">
               Founder’s Murmurs
            </h3>
          </div>
        </div>

        <div className="w-full relative">
          <div className="wl-fs-40 leading-relaxed text-gray-800 space-y-[1.5vw] font-medium text-justify">
            <p>
              Amidst the rush to create omnipotent machines, we operate like an unassuming tailor shop tucked away in a cyberpunk landscape—stitching 
              Physical AI into the fabric of daily life to make it tangible and within reach. Our mission isn't to overhaul the world with overwhelming 
              complexity, but to integrate intelligence into daily life through a cost-effective, understated way.
            </p>
            <p>
              For the longest time, real automation was just for the big guys—expensive toys for massive factories. But we're taking a different route.
            </p>
            <p>
              We start with simple, open-source hardware that anyone can buy. The magic happens when we give it a brain. By mixing state-of-the-art learning 
              with the hardware, we get these affordable robots to do surprisingly delicate things—like making a perfect cup of boba.
              It's not just about training models. It's about engineering robustness. We mix the reliability of old-school control with the adaptability of 
              modern RL. It turns out, you can get 'expensive' performance out of 'cheap' machines.
            </p>
            <p>
              We really believe the next big shift won't be about better steel. It's going to be about smarter code.
            </p>
          </div>
        </div>
        <div className="mt-[10vw] mb-[2vw]">
          <Link 
            href="/" 
            className={`
              inline-block
                  px-[2.4vw]
                  py-[1.6vw]
                  border
                  wl-fs-40 font-semibold leading-none
                  text-black
                  border-[#5C3A21]/15
                  shadow-lg
                  hover:border-[#5C3A21]
                  transition
                  pointer-events-auto
            `}
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}