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
          
        <div
          className="
            absolute 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300
            flex flex-col items-center
            pointer-events-none
          "
          style={{
            bottom: "5%",          // 位置你可以微调
            right: "15%",          // 位置你可以微调
          }}
        >
          {/* 箭头（简单 SVG） */}
          <svg
            className="w-[3vw] h-[3vw] text-[#5C3A21] mb-[0.5vw]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M13 5l7 7-7 7"
            />
          </svg>

          {/* 文字提示 */}
          <div className="wl-fs-32 font-semibold text-[#5C3A21] drop-shadow">
            Click here for full demo
          </div>
        </div>

        {/* 🟡 黄色按钮（可点击跳转） */}
        <Link
          href="/full-demo"
          className="
            absolute z-20
            bg-[#E8C557] 
            hover:bg-[#F0D46A]
            transition-all
            shadow-md rounded-full
          "
          style={{
            width: "3.2vw",
            height: "3.2vw",
            bottom: "4%",
            right: "10%",
          }}
        ></Link>

        <div className="absolute right-[7.5%] top-[8vw] pointer-events-auto">
          <SectionNav />
        </div>
      </div>
    </section>
  );
}