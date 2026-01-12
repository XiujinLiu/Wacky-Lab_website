import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import Link from "next/link";
import VisionModal from "@/components/VisionModal";
import { useState } from "react";


export default function ProductSection() {
  return (
    <section id="section-2" className="relative w-full">
      <Image
        src="/images/product_demo.png"
        alt="Product"
        width={2560}
        height={1600}
        priority
        className="w-full h-auto object-cover"
      />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-[7vw] left-[0vw] w-[18vw]
            z-30
          "
        >
          {/* 便利贴本体 */}
          <div className="
            relative
            // bg-[#FCF9F6]
            bg-[#fefdfa]
            p-[1.5vw]
            rotate-2
            shadow-lg
            flex flex-col items-start
            border border-[#5C3A21] border-[0.12vw]
          ">
            <div className="
              absolute
              -top-[2vw]
              left-1/2 -translate-x-1/2
              w-[4vw] h-[3vw]
              bg-white/80
              shadow-[0_1px_2px_rgba(0,0,0,0.3)]
              border-l border-r border-white/10
              -rotate-1
            "></div>

            <h2 className="wl-fs-32 font-semibold tracking-wide text-[#5C3A21] mb-[2vw]" style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>
              We start from drink communities — building AI-powered robotic stations that craft fresh, personalized beverages anywhere, anytime.
            </h2>

            <Link
              href="/product"
              className="
                relative
                px-[1.2vw] py-[0.8vw]
                border-[0.15vw] border-[#5C3A21]/50
                rounded-[2vw_0.5vw_2vw_0.5vw]
                wl-fs-28 font-semibold leading-none
                text-[#5C3A21]
                hover:border-[#5C3A21]
                transition
                pointer-events-auto
                z-20
                self-center
              "
            >
              Learn Product Details
            </Link>
          </div>
        </div>
        
        
                

        {/* 中间视频区域 */}
        <div
          className="
            absolute
            left-[21.3%]
            top-[7.6vw]
            w-[56.3%]
            h-[30.3vw]
            overflow-hidden
            rounded-[24px]
            shadow-lg
            border border-[#5C3A21]/10
          "
          style={{
            transform: "rotate(0.6deg)",
            transformOrigin: "center center",
          }}
        >
          <video
            src="/images/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-[1.13vw] top-[8vw] pointer-events-auto">
          <SectionNav />
        </div>
      </div>
    </section>
  );
}