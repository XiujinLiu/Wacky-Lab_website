// components/ContactSection.tsx

import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import rawTopics from "@/data/contact.json";
import { ContactLabel } from "@/app/utils";

const topics = rawTopics as ContactLabel[];

export default function ContactSection() {
  return (
    <section id="section-4" className="relative w-full">
      <Image
        src="/images/contact.png"
        alt="Contact"
        width={2560}
        height={1600}
        priority
        className="w-full h-auto object-cover"
      />
      <div className="absolute left-[7vw] top-[4vw]
                z-30 wl-fs-40 font-semibold tracking-wide text-[#5C3A21]">
                If you're looking to access our service or wish to collaborate with us on ...
      </div>
      <div className = "flex flex-col gap-[3vw] absolute left-[15vw] top-[38vw] z-30 text-[#5C3A21] tracking-wide font-semibold ">
        <div className="
                  wl-fs-40">
                  please reach out at 
                  <a className="wl-fs-48"
                  href="mailto:wackylab7@gmail.com"> wackylab7@gmail.com </a>
        </div>
        <div className="wl-fs-40 max-w-[50vw]">
                "Let's build the world together and make great things happen!”
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


      <div className="absolute right-[7.5%] top-[7vw] pointer-events-auto">
                      <SectionNav />
      </div>
    </section>
  );
}