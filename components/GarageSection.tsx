// components/ContactSection.tsx

import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="section-3" className="relative w-full">
      <Image
        src="/images/garage.png"
        alt="Garage"
        width={2560}
        height={1600}
        priority
        className="w-full h-auto object-cover"
      />

      <Image
        src="/images/coming.png"
        alt="Coming"
        width={855}
        height={792}
        priority
        className="absolute w-[50vw] h-auto object-cover left-[10%] top-[12vw]"
      />

      <div className="absolute left-[3vw] top-[8vw]
                z-30 wl-fs-40 tracking-wide text-[#5C3A21] max-w-[75vw]">
                Welcome to the Wacky Garage — our side-quest workshop where we fix, 
                build, hack, mix, and hustle just enough cash to keep the real experiments alive.
      </div>

      <div className="absolute bottom-[4vw] left-[30%] font-black
                z-30 wl-fs-48 tracking-wide text-[#5C3A21] max-w-[75vw]">
                Coming Soon
      </div>

      <Link
        href="/shop"
        className="
            absolute z-30 animate-pulse
            hover:scale-110 hover:animate-none
            transition-all
        "
        style={{
            top: "32vw",
            left: "84.5%",
            transform: "translate(-50%, -50%)",
            width: "26vw"
        }}
        >
        <span className="font-semibold text-[#5C3A21]">
            <p className="wl-fs-40"> INTERESTED? </p>
            <p className="wl-fs-40"> Well… you've got some shopping to do.  </p>
        </span>
        <span className="wl-fs-44 font-bold text-[#dc7156] block mt-[1vw]">
            Click me → Your robot awaits.
        </span>
        </Link>
      <div className="absolute right-[7.5%] top-[8vw] pointer-events-auto">
                <SectionNav />
      </div>
    </section>
  );
}