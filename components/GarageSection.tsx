// components/ContactSection.tsx

import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="section-4" className="relative w-full">
      <Image
        src="/images/garage_final.png"
        alt="Garage"
        width={2560}
        height={1600}
        priority
        className="w-full h-auto object-cover"
      />
      <div className="absolute left-[47vw] top-[20.5vw] z-30 text-[#dc7156] tracking-wide font-semibold">
        <p className="wl-fs-48 [-webkit-text-stroke:0.1vw_black]">
          GARAGE
        </p>
      </div>

      <div className="absolute top-[5vw] left-0 w-full text-center block">
            <h3 className="wl-fs-60 font-black uppercase text-black tracking-tight bg-[#fefdfa] inline-block backdrop-blur-sm">
              WAIT! WE HAVE MORE... CHECK OUR QRAFTY GARAGE
            </h3>
      </div>

      <div className="absolute top-[24vw] left-[25vw] w-[18vw] h-auto rotate-0.5 flex flex-col items-center px-[0.5vw] py-[1.2vw] text-center mix-blend-multiply">
        <h2 className="text-[#dc7156] wl-fs-40 font-mono font-black tracking-tighter leading-none mb-[0.5vw]">
          &gt;_ GARAGE.sh
        </h2>
        <div className="flex-1 w-full pl-[3vw] bg-white/40 p-[0.5vw] rounded-sm">
          <p className="text-gray-800 wl-fs-22 font-mono leading-relaxed">
            <span className="text-gray-400 block"> /* ----------------</span>
            <span className="text-gray-700 block mt-[0.1vw]"> * We believe the best</span>
            <span className="text-gray-700 block"> *  software is built in</span>
            <span className="text-gray-700 block mt-[0.1vw]"> * the open. Here, we open</span>
            <span className="text-gray-700 block"> *  source part of our work.</span>
            <span className="text-gray-400 block mt-[0.2vw]"> */</span>
          </p>
        </div>
        <div className="flex-1 w-full text-left pl-[3.9vw]">
          <ul className="text-gray-800 wl-fs-26 font-mono font-semibold space-y-[0.6vw]">
            <li>
              <span className="text-[#dc7156] mr-[0.1vw]">$</span>
              npm install future
            </li>
            <li>
              <span className="text-[#dc7156] mr-[0.1vw]">$</span>
              git init repo
            </li>
            <li>
              <span className="text-[#dc7156] mr-[0.2vw]">$</span>
              make -j8 innovations
            </li>
            <li className="text-gray-400 italic">
              <span className="text-gray-400 mr-[0.2vw]">#</span>
              waiting for you...
            </li>
          </ul>
        </div>
        <div className="mt-auto flex pl-[3vw]">
          <p className="text-gray-900 wl-fs-26 font-mono font-bold">
            Loading
            <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>

      <Link
        href="/shop"
        className="
            absolute z-30 animate-pulse
            hover:scale-110 hover:animate-none
            transition-all
        "
        style={{
            top: "30vw",
            left: "74vw",
            transform: "translate(-50%, -50%)",
            width: "26vw"
        }}
        >
        <span className="font-semibold text-[#5C3A21]">
            <p className="wl-fs-40 mb-[1vw]"> INTERESTED  </p>
            <p className="wl-fs-40"> in more resources? </p>
        </span>
        <span className="wl-fs-44 font-bold text-[#dc7156] block mt-[1vw]">
            Click me → Your robot awaits.
        </span>
      </Link>
      <div className="absolute right-[1.13vw] top-[9.5vw] pointer-events-auto">
                <SectionNav />
      </div>
    </section>
  );
}