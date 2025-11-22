"use client";

import { useEffect, useState } from "react";

interface SectionItem {
  id: string;    // 对应 <section id="xxx">
  label: string; // 右侧显示的文字
}

interface SectionNavProps {
  sections?: SectionItem[];
  className?: string; // 用来控制它在右边栏里的布局位置
}

const DEFAULT_SECTIONS: SectionItem[] = [
  { id: "section-1", label: "Wacky Lab" },
  { id: "section-2", label: "Product Demo" },
  { id: "section-3", label: "Wacky Garage" },
  { id: "section-4", label: "Contact Us" },
];

export default function SectionNav({ sections = DEFAULT_SECTIONS, className = "" }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  // 监听各个 section 是否进入视口，高亮当前 section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.5],
        rootMargin: "-20% 0px -20% 0px", // 视口中间 60% 作为“当前 section”区域
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // ✅ 点击某个目录项 → 滚动到对应 section
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside
      className={`
        flex
        flex-col gap-[2.5vw]
        px-[1vw] py-[1vw]
        ${className}
      `}
    >

      {sections.map((s) => {
        const active = s.id === activeId;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => handleClick(s.id)}
            className={`
              wl-fs-32
              text-left
              flex items-center gap-[1vw]
              transition-all duration-200
              ${
                active
                  ? "text-[#5C3A21] font-bold "
                  : "text-[#5C3A21]/70"
                  
              }
            `}
          >
            {s.label}
          </button>
        );
      })}
    </aside>
  );
}