"use client";
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
      <div className="flex flex-col lg:block relative w-full h-auto lg:aspect-[2560/1600]">
        <div className="lg:hidden flex flex-col items-center justify-center pt-10 pb-1 px-4 bg-[#fefdfa] z-20 order-1">
          <div className="text-3xl font-bold tracking-wide text-[#5C3A21] mb-6 text-center">
            QRAFTY-AI
          </div>
          <Link
            href="#section-2"
            className="
              inline-block
              px-8 py-2.5
              border border-[#5C3A21]/30
              text-lg font-semibold leading-none
              text-[#5C3A21]
              hover:border-[#5C3A21]
              hover:bg-[#5C3A21]/5
              transition
              rounded-full
            "
          >
            Learn More
          </Link>
        </div>
        <div 
          className="
            relative w-full overflow-hidden order-2 aspect-[1536/1600] lg:aspect-auto lg:absolute lg:inset-0 lg:h-auto lg:order-none"
          >
          <Image
            src="/images/cover.png"
            alt="cover" 
            width={2560}
            height={1600}
            priority
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="lg:hidden w-full bg-[#fefdfa] pt-5 pb-10 space-y-12 order-3">
  
            {/* --- Vision Section (先显示 Vision) --- */}
            <div className="px-6">
              <div className="
                relative w-full
                p-1
              ">
                <h2 className="text-xl font-bold tracking-wide text-[#5C3A21] mb-4 text-center">
                  Robotics Sharing Community
                </h2>
                <p className="text-base leading-relaxed text-[#5C3A21]/80 font-medium mb-6 text-left">
                  Our mission is to fill every inconvenient corner of daily life with intelligence and 
                  possibility — We imagine a world where anyone can create, share, and enjoy their own food, 
                  drink, and lifestyle experiences — wherever they are.
                </p>
                <Link
                  href="/vision"
                  className="
                    block mx-auto w-fit
                    px-4 py-2
                    border border-dashed border-[#5C3A21]
                    text-lg font-semibold leading-none
                    text-[#5C3A21]
                    hover:bg-[#5C3A21]/5
                    transition
                    rounded-lg
                    text-center
                  "
                >
                  Click to Learn Vision
                </Link>
              </div>
            </div>

            {/* --- News Section (后显示 News，左右滑动) --- */}
            <div className="w-full overflow-hidden">
              {/* 标题 */}
              <div className="px-6 mb-4 text-center">
                <div className="text-sm font-bold tracking-[0.15em] uppercase text-[#5C3A21]/60">
                  News
                </div>
                <div className="text-xl font-bold text-[#5C3A21] mt-1">
                  What's New · Qrafty
                </div>
              </div>

              {/* 滑动容器 */}
              <div className="
                flex overflow-x-auto flex-nowrap 
                gap-4 px-6 pb-4
                snap-x snap-mandatory
                no-scrollbar
              ">
                {newsItems.map((item) => (
                  <article
                    key={item.id}
                    className="
                      /* min-w-[85vw] 确保用户能看到一点点下一张卡片 */
                      min-w-[85vw] sm:min-w-[300px]
                      snap-center
                      bg-white/10 border border-[#5C3A21]/15 
                      rounded-2xl p-3
                      shadow-sm
                    "
                  >
                    <div className="text-sm text-[#5C3A21]/60 mb-2 font-medium">
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold text-[#5C3A21] mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5C3A21]/80 leading-snug line-clamp-3">
                      {item.summary}
                    </p>
                  </article>
                ))}
                
                {/* 这里的空 div 是为了让最后一张卡片右边有留白 */}
                <div className="min-w-[1rem]"></div>
              </div>
            </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="hidden lg:flex relative h-full w-full">
            <div
              className="
                absolute left-1/2 top-[1vw]
                -translate-x-1/2
                z-0
                flex flex-col items-center
                gap-[1.5vw]
              "
            >
              <div className="wl-fs-48 font-semibold tracking-wide text-[#5C3A21]">
                QRAFTY-AI
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
            {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="group absolute z-10 pointer-events-auto"
              style={{ top: spot.top, left: spot.left }}
            >
              <div
                className="relative cursor-point"
                style={{ width: spot.w, height: spot.h }}
              >
                {spot.dialogs.map((dialog) => (
                        <div
                          key={dialog.id}
                          className="absolute pointer-events-none"
                          style={{
                            left: dialog.offsetX,
                            top: dialog.offsetY,
                          }}
                        >
                          <div className="transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                            <div
                              className="
                                pointer-events-auto /* 恢复鼠标交互 */
                                bg-white
                                text-[#5C3A21]
                                border border-[#5C3A21]/40
                                shadow-lg
                                px-[0.8vw] py-[0.5vw]
                                
                                /* 宽度控制 */
                                max-w-[15vw] 
                                w-max
                                
                                wl-fs-20 
                                leading-relaxed
                                rounded-xl

                                /* 初始动画状态 */
                                opacity-0
                                scale-95 
                                translate-y-[2vw] /* 这里只控制动画的偏移，不影响定位 */
                                
                                /* Hover 触发动画 */
                                group-hover:opacity-100
                                group-hover:scale-100
                                group-hover:translate-y-0 /* 鼠标悬停时，回到正中心位置 */
                                
                                transition-all duration-300 ease-out
                                bubble-box
                                relative
                              "
                            >
                              <div>{dialog.description}</div>
                              <div className="bubble-tail absolute left-1/2 -translate-y-1/2 top-full"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
            ))} 
            </div>

          {/* computer */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
          {/* 右侧 News 面板 */}
            <aside
              className="
                pointer-events-auto
                absolute top-[6vw] bottom-[6vw] right-[1%]
                w-[16.6%]
                flex flex-col
                overflow-hidden
              "
            >
              {/* 标题区 */}
              <div>
                <div className="wl-fs-22 font-semibold tracking-[0.15em] uppercase text-[#5C3A21]/80 text-center">
                  News
                </div>
                <div className="wl-fs-26 text-[#5C3A21] mt-[0.5vw] mb-[1.5vw] text-center">
                  What's New · Qrafty
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
            <div
              className="
                pointer-events-auto
                absolute top-[4.5vw] left-[0.5vw] w-[23vw]
                border-dashed border-black
                border-t-[0.12vw] border-r-[0.12vw] border-b-[0.12vw]
                px-[1vw] py-[1.5vw]
                rounded-r-[3.5vw]
              "
            >
              <h2 className="wl-fs-28 font-semibold tracking-wide text-[#5C3A21] mb-[1.2vw] text-center">
                Robotics Sharing Community
              </h2>
              <p className="wl-fs-26 leading-relaxed text-[#5C3A21]/80 font-semibold mb-[1.2vw]">
                Our mission is to fill every inconvenient corner of daily life with intelligence
                and possibility — We imagine a world where anyone can create, share, and enjoy their own food,
                drink, and lifestyle experiences — wherever they are.
              </p>
              <Link
                  href="/vision"
                  className="
                  block mx-auto w-fit
                  px-[1vw] py-[0.5vw]
                  border-[0.12vw] border-dashed border-black/30
                  wl-fs-26 font-semibold leading-none
                  text-[#5C3A21]
                  hover:border-black
                  transition
                  pointer-events-auto
                  z-20
                  text-center
                  "
                >
                  Click Here to Learn Our Vision
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}