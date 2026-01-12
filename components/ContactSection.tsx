// components/ContactSection.tsx

import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import rawTopics from "@/data/contact.json";
import { ContactLabel } from "@/app/utils";

const topics = rawTopics as ContactLabel[];

export default function ContactSection() {
  return (
    <section id="section-3" className="relative w-full">
      <Image
        src="/images/about_us.png"
        alt="Contact"
        width={2560}
        height={1600}
        priority
        className="w-full h-auto object-cover"
      />
      <div className = "flex flex-col gap-[2vw] absolute left-[15vw] top-[39vw] z-30 text-[#5C3A21] tracking-wide font-semibold ">
        <div className="
                  wl-fs-40">
                  If you want to collaborate or have any questions,
        </div>
        <div className="
                  wl-fs-40">
                  please reach out at 
                  <a className="wl-fs-48"
                  href="mailto:wackylab7@gmail.com"> wackylab7@gmail.com </a>
        </div>
        <div className="wl-fs-40 max-w-[50vw] text-[#E85D4E]">
                "Let's build the world together”
        </div>
      </div>  

      {topics.map((topic) => (
        <div
          key={topic.id}
          className="
            absolute
            z-20
            wl-fs-32
            font-semibold
            tracking-wide
            text-[#dc7156]
          "
          style={{
            top: topic.top,
            left: topic.left,
            transform: "translate(-50%, -50%)",
            color: topic.color,
          }}
        >
          {topic.discription}
        </div>
      ))}


      <div className="absolute right-[1.13vw] top-[5vw] pointer-events-auto">
                      <SectionNav />
      </div>
    </section>
  );
}