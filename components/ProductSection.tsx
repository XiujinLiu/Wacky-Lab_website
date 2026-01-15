import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import Link from "next/link";


export default function ProductSection() {
  return (
    <section id="section-2" className="relative w-full">
      <div className="flex flex-col lg:block relative w-full h-auto lg:aspect-[2560/1600]">
        <div className="relative w-full overflow-hidden order-2 aspect-[1536/1600] lg:aspect-auto lg:absolute lg:inset-0 lg:h-auto lg:order-none">
          <Image
            src="/images/product_demo.png"
            alt="Product"
            width={2560}
            height={1600}
            priority
            className="w-full h-full object-cover object-center"
          />
          <div
            className="
              pointer-events-auto
              absolute
              left-[2%]
              w-[94%]
              top-[13vw]
              h-[50vw]
              lg:left-[21.3%]
              lg:top-[7.6vw]
              lg:w-[56.3%]
              lg:h-[30.3vw]
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
              className="absolute inset-0 z-50 cursor-pointer" // 调试完成后可去掉颜色
            >
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
              absolute top-[7vw] left-[0vw] w-[18vw]
              z-30
            "
          >
            {/* 便利贴本体 */}
            <div className="
              hidden
              lg:block
              relative
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
          <div className="hidden lg:block absolute right-[1.13vw] top-[8vw] pointer-events-auto">
            <SectionNav />
          </div>
        </div>
        <div className="lg:hidden w-full bg-[#fefdfa] pt-5 pb-10 space-y-12 order-3">
  
            {/* --- Vision Section (先显示 Vision) --- */}
            <div className="px-6">
              <div className="
                relative w-full
                p-1
              ">
                <h2 className="text-xl font-bold tracking-wide text-[#5C3A21] mb-4 text-center">
                  Our First Product
                </h2>
                <p className="text-base leading-relaxed text-[#5C3A21]/80 font-medium mb-6 text-left">
                  We start from drink communities — building AI-powered robotic stations that craft fresh, 
                  personalized beverages anywhere, anytime.
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
                  Learn Product Details
                </Link>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}