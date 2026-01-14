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
        <div className="w-full flex flex-row items-baseline gap-[1vw]">
          <h1 
            className={`${headerFont.className} wl-fs-200 font-bold text-[#e8c55b] tracking-wider`}
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
            PRODUCT
          </h1>
          <div className="flex flex-col gap-[1vw]">
            <h2 className="wl-fs-70 font-bold uppercase tracking-wide text-black">
              Affordable hardware
            </h2>
            <p className="wl-fs-48 font-medium text-gray-600">
              AI-Powered Robotics vending for Handcrafted Beverages Everywhere and Anytime
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src="/images/product_page_final.png"
            alt="Qrafty Vision Illustration"
            width={2560}
            height={4000}
            className="w-full h-auto object-contain"
            priority
          />
          <div className="absolute top-[63vw] left-0 w-full text-center block">
            <h3 className="wl-fs-60 font-black uppercase text-black tracking-tight bg-[#fefdfa] inline-block backdrop-blur-sm">
              What Do we Want to Do
            </h3>
          </div>
          <div className="absolute top-[131vw] left-0 w-full text-center block">
            <h3 className="wl-fs-60 font-black uppercase text-black tracking-tight bg-[#fefdfa] inline-block backdrop-blur-sm">
               What is Our Technique Strategies
            </h3>
          </div>
          <div
          className="
            absolute
            left-[18vw]
            top-[10.3vw]
            w-[47.1vw]
            h-[27.2vw]
            overflow-hidden
            rounded-[2vw]
            shadow-lg
            border border-[#5C3A21]/10
          "
          style={{
            transform: "rotate(0.6deg)",
            transformOrigin: "center center",
          }}
        >
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/yHQ27VNNdcU?autoplay=1&mute=1&controls=0&loop=1&playlist=yHQ27VNNdcU&playsinline=1"
              title="YouTube video player"
              className="w-full h-full object-cover pointer-events-none" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              tabIndex={-1}/>
          </div>
          <a
            href="https://youtu.be/yHQ27VNNdcU"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full cursor-pointer z-50 bg-red-500/30"
          >
          </a>
        </div>
        </div>

        <div className="mt-[1vw] mb-[2vw]">
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