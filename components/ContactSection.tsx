// components/ContactSection.tsx

import Image from "next/image";
import SectionNav from "@/components/SectionNav";
import rawTopics from "@/data/contact.json";
import { ContactLabel } from "@/app/utils";

const topics = rawTopics as ContactLabel[];

export default function ContactSection() {
  return (
    <section id="section-3" className="relative w-full">
      <div className="flex flex-col lg:block relative w-full h-auto lg:aspect-[2560/1600]">
      <div 
        className="
          relative w-full overflow-hidden order-2 aspect-[2000/1600] lg:aspect-auto lg:absolute lg:inset-0 lg:h-auto lg:order-none"
        >
        <Image
          src="/images/about_us.png"
          alt="cover" 
          width={2560}
          height={1600}
          priority
          className="w-full h-full object-cover object-[26%_center] lg:object-center"
        />
      </div>
      <div className = "hidden lg:flex flex-col gap-[2vw] absolute left-[15vw] top-[39vw] z-30 text-[#5C3A21] tracking-wide font-semibold ">
        <div className="
                  wl-fs-40">
                  If you want to collaborate or have any questions,
        </div>
        <div className="
                  wl-fs-40">
                  please reach out at 
                  <a className="wl-fs-48"
                  href="mailto:liuxj0666@gmail.com"> liuxj0666@gmail.com </a>
        </div>
        <div className="wl-fs-40 max-w-[50vw] text-[#E85D4E]">
                "Let's build the world together”
        </div>
      </div>  

      <div className = "lg:hidden flex flex-col gap-[1.5vw] absolute left-[10vw] top-[49vw] z-30 text-[#5C3A21] tracking-wide font-semibold ">
        <div className="
                  text-[2.5vw]">
                  If you want to collaborate or have any questions,
        </div>
        <div className="
                  text-[2.5vw]">
                  please reach out at 
                  <a className="text-[2.5vw]"
                  href="mailto:liuxj0666@gmail.com"> liuxj0666@gmail.com </a>
        </div>
        <div className="text-[2.5vw] max-w-[50vw] text-[#E85D4E]">
                "Let's build the world together”
        </div>
      </div> 

      {topics.map((topic) => (
        <div
          key={topic.id}
          className="
            hidden
            lg:block
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


      <div className="hidden lg:block absolute right-[1.13vw] top-[8vw] pointer-events-auto">
                      <SectionNav />
      </div>
      </div>
    </section>
  );
}