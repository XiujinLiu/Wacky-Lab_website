import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import Link from "next/link";


export default function ProductSection() {
  return (
    <section id="section-2" className="relative w-full">
      <Image
        src="/images/product.png"
        alt="Product"
        width={2560}
        height={1600}
        priority
        className="w-full h-auto object-cover"
      />

      <div className="pointer-events-none absolute inset-0">
        {/* 左上文案 */}
        <div
          className="
            absolute top-[5vw] left-[2vw] w-[18vw]
              z-30
          "
        >
          <h2 className="wl-fs-32 font-semibold tracking-wide text-[#5C3A21] mb-[1.2vw]">
            We start from drinks — building AI-powered robotic stations that craft fresh, personalized beverages anywhere, anytime.
          </h2>
          <p className="wl-fs-25 leading-relaxed mb-[0.6vw] text-[#5C3A21]/80">
            By combining advanced robotics, intelligent workflow automation, and a community-driven flavor platform, we're creating 
            the next generation of drink experiences—consistent, scalable, and accessible in every corner of the city.
          </p>
        </div>

        {/* 中间视频区域 */}
        <div
          className="
            absolute
            left-[23%]
            top-[9.2vw]
            w-[48.3%]
            h-[29.8vw]
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
        <div className="absolute right-[7.5%] top-[8vw] pointer-events-auto">
          <SectionNav />
        </div>
      </div>
    </section>
  );
}