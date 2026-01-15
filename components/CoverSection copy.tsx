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
          <div className="relative h-full w-full">
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
              // <div
              //   key={spot.id}
              //   className="group absolute z-10 pointer-events-auto bg-white"
              //   style={{ top: spot.top, left: spot.left}}
              // >
              //   <div className="relative cursor-point"
              //   style={{
              //           width: spot.w,
              //           height: spot.h,}}>
              //     {spot.dialogs.map((dialog) => (
              //       <div
              //         key={dialog.id}
              //         className="
              //           inline-block
              //           absolute
              //           bg-white
              //           text-[#5C3A21]
              //           border border-[#5C3A21]/40
              //           shadow-lg
              //           px-[0.8vw] py-[0.5vw]
              //           max-w-[10vw]
              //           wl-fs-20 
              //           leading-relaxed
              //           rounded-xl
              //           opacity-0
              //           scale-95 translate-y-[5vw]
              //           group-hover:opacity-100
              //           group-hover:scale-100
              //           group-hover:translate-y-[1vw]
              //           transition-all duration-300 ease-out
              //           bubble-box
              //         "
              //         style={{
              //           bottom: dialog.offsetY,
              //           left: dialog.offsetX,
              //         }}
              //       >
              //         <div>{dialog.description}</div>

              //         {/* 小尾巴 */}
              //         <div className="bubble-tail"></div>
              //       </div>
              //     ))}
              //   </div>
              // </div>
            <div
    key={spot.id}
    className="group absolute z-10 pointer-events-auto"
    style={{ top: spot.top, left: spot.left }} // 1. 热点本身的绝对位置
  >
    <div
      className="relative cursor-point"
      style={{ width: spot.w, height: spot.h }}
    >
      {spot.dialogs.map((dialog) => (
              <div
                key={dialog.id}
                className="absolute pointer-events-none" // pointer-events-none 防止透明区域遮挡
                style={{
                  /* 设定锚点坐标 */
                  left: dialog.offsetX,
                  top: dialog.offsetY,
                }}
              >
                {/* 外层容器的核心样式：
                  1. absolute: 绝对定位
                  2. -translate-x-1/2 -translate-y-1/2: 
                      关键！这让当前 div 的【中心点】完全重合于上面的 left/top 坐标。
                      无论子元素撑多大，这里永远中心对齐。
                */}
                <div className="transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  
                  {/* --- 内层：视觉与动画层 (The Visual) --- */ }
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

          {/* 右侧 News 面板 */}
          <aside
            className="
              pointer-events-auto
              absolute top-[6vw] bottom-[6vw] right-[1%]
              w-[16.6%]
              flex flex-col
              overflow-hidden
              z-0
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
              absolute top-[4.5vw] left-[0.5vw] w-[23vw]
              z-0
              /* --- 新增的虚线框样式 --- */
              border-dashed border-black
              border-t-[0.12vw] border-r-[0.12vw] border-b-[0.12vw]
              px-[1vw] py-[1.5vw]
              rounded-r-[3.5vw]
              /* ----------------------- */
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
    </section>
  );
}