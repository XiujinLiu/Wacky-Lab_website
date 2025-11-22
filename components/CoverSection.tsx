// components/HeroSection.tsx

import Image from "next/image";
import Link from "next/link";
import { Hotspot, NewsItem } from "@/app/utils";

interface HeroSectionProps {
  hotspots: Hotspot[];
  newsItems: NewsItem[];
}

export default function CoverSection({ hotspots, newsItems }: HeroSectionProps) {
  return (
    <section id="section-1" className="relative w-full">
      <div className="relative w-full aspect-[2560/1600]">
        <Image
          src="/images/cover.png"
          alt="cover"
          width={2560}
          height={1600}
          priority
          className="w-full h-auto object-cover"
        />

        <div className="pointer-events-none absolute inset-0">
          {/* 内容层 */}
          <div className="relative h-full w-full">
            {/* 顶部 Logo / 标题 */}
            <div
              className="
                absolute left-1/2 top-[2vw]
                -translate-x-1/2
                z-30
                flex flex-col items-center
                gap-[1vw]
              "
            >
              <div className="wl-fs-48 font-semibold tracking-wide text-[#5C3A21]">
                Wacky Lab
              </div>
              <Link
                href="#section-2"
                className="
                  inline-block
                  px-[1.2vw]
                  py-[0.8vw]
                  border
                  wl-fs-28 font-semibold leading-none
                  text-[#5C3A21]
                  border-[#5C3A21]/15
                  shadow-lg
                  hover:border-[#5C3A21]
                  transition
                  pointer-events-auto
                "
              >
                Learn More
              </Link>
            </div>
            {/* 热点区域 */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="group absolute z-20 pointer-events-auto"
                style={{ top: spot.top, left: spot.left}}
              >
                <div className="relative cursor-point"
                style={{
                        width: spot.w,
                        height: spot.h,}}>
                  {spot.dialogs.map((dialog) => (
                    <div
                      key={dialog.id}
                      className="
                        inline-block
                        absolute
                        bg-white
                        text-[#5C3A21]
                        border border-[#5C3A21]/40
                        shadow-lg
                        px-[0.8vw] py-[0.5vw]
                        max-w-[10vw]
                        wl-fs-20 
                        leading-relaxed
                        rounded-xl
                        opacity-0
                        scale-95 translate-y-1
                        group-hover:opacity-100
                        group-hover:scale-100
                        group-hover:translate-y-0
                        transition-all duration-300 ease-out
                        bubble-box
                      "
                      style={{
                        bottom: dialog.offsetY,
                        left: dialog.offsetX,
                      }}
                    >
                      <div>{dialog.description}</div>

                      {/* 小尾巴 */}
                      <div className="bubble-tail"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 右侧 News 面板 */}
          <aside
            className="
              pointer-events-auto
              absolute top-[6vw] bottom-[6vw] right-[1%]
              w-[16.6%]
              flex flex-col
              overflow-hidden
              z-30
            "
          >
            {/* 标题区 */}
            <div>
              <div className="wl-fs-22 font-semibold tracking-[0.15em] uppercase text-[#5C3A21]/80 text-center">
                News
              </div>
              <div className="wl-fs-26 text-[#5C3A21] mt-[0.5vw] mb-[1.5vw] text-center">
                What's New · WackyLab
              </div>
            </div>

            {/* 内容区 */}
            <div className="flex-1 overflow-y-auto space-y-[0.5vw]">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white/10 rounded-xl border border-[#5C3A21]/15 py-[0.8vw] px-[1vw] hover:border-[#5C3A21]/40 transition"
                >
                  <div className="wl-fs-20 text-[#5C3A21]/70 mb-[0.5vw]">
                    {item.date}
                  </div>
                  <h3 className="wl-fs-20 font-semibold text-[#5C3A21] mb-[0.5vw]">
                    {item.title}
                  </h3>
                  <p className="wl-fs-20 text-[#5C3A21]/80 leading-snug">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </aside>

          {/* 左上角公司简介 */}
          <div
            className="
              absolute top-[6vw] left-[3vw] w-[23vw]
              z-30
            "
          >
            <h2 className="wl-fs-32 font-semibold tracking-wide text-[#5C3A21] mb-[1.2vw]">
              Robotics Vending Community
            </h2>

            {/* 正文分成两段，行距稍微大一点 */}
            <p className="wl-fs-25 leading-relaxed mb-[0.6vw] text-[#5C3A21]/80">
              Our mission is to fill every inconvenient corner of daily life with intelligence
              and possibility — building a community of robots that brings freshness,
              creativity, and handcrafted quality to everyone, anytime, anywhere. We aim
              not to replace people, but to empower them; not to limit choices, but to open
              them. We imagine a world where anyone can create, share, and enjoy their own food,
              drink, and lifestyle experiences — wherever they are.
            </p>

            {/* 结尾强调句，单独一块、整体加粗 */}
            <p className="wl-fs-25 leading-relaxed font-semibold text-[#5C3A21]/80">
              We are WackyLab from the University of Michigan. A team that doesn't follow
              the rules. We build them.
  </p>
          </div>
        </div>
      </div>
    </section>
  );
}