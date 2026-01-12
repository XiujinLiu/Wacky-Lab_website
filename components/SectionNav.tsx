// "use client";

// import { useEffect, useState } from "react";

// interface SectionItem {
//   id: string;    // 对应 <section id="xxx">
//   label: string; // 右侧显示的文字
// }

// interface SectionNavProps {
//   sections?: SectionItem[];
//   className?: string; // 用来控制它在右边栏里的布局位置
// }

// const DEFAULT_SECTIONS: SectionItem[] = [
//   { id: "section-1", label: "Qrafty-ai" },
//   { id: "section-2", label: "Product Details" },
//   { id: "section-3", label: "Qrafty Garage" },
//   { id: "section-4", label: "Contact Us" },
// ];

// export default function SectionNav({ sections = DEFAULT_SECTIONS, className = "" }: SectionNavProps) {
//   const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

//   // 监听各个 section 是否进入视口，高亮当前 section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort(
//             (a, b) =>
//               (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
//           );

//         if (visible[0]) {
//           setActiveId(visible[0].target.id);
//         }
//       },
//       {
//         root: null,
//         threshold: [0.3, 0.5],
//         rootMargin: "-20% 0px -20% 0px", // 视口中间 60% 作为“当前 section”区域
//       }
//     );

//     sections.forEach((s) => {
//       const el = document.getElementById(s.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [sections]);

//   // ✅ 点击某个目录项 → 滚动到对应 section
//   const handleClick = (id: string) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     el.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <aside
//       className={`
//         flex
//         flex-col gap-[2.5vw]
//         px-[1vw] py-[1vw]
//         ${className}
//       `}
//     >

//       {sections.map((s) => {
//         const active = s.id === activeId;
//         return (
//           <button
//             key={s.id}
//             type="button"
//             onClick={() => handleClick(s.id)}
//             className={`
//               wl-fs-32
//               text-left
//               flex items-center gap-[1vw]
//               transition-all duration-200
//               ${
//                 active
//                   ? "text-[#5C3A21] font-bold "
//                   : "text-[#5C3A21]/70"
                  
//               }
//             `}
//           >
//             {s.label}
//           </button>
//         );
//       })}
//     </aside>
//   );
// }

"use client";

import { useEffect, useState } from "react";

// --- 1. 定义图标和接口 ---

// 简单的 SVG 图标组件
const TechIcon = ({ type, isActive }: { type?: string; isActive: boolean }) => {
  const colorClass = isActive ? "text-yellow-600" : "text-[#5C3A21]/50";
  // 使用 em 单位，让图标随字体大小自动缩放
  const commonClasses = `w-[1em] h-[1em] ${colorClass} transition-colors duration-300 flex-shrink-0`;

  switch (type) {
    case "cpu": // Qrafty-ai
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>
      );
    case "gear": // Product Details
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg>
      );
    case "wrench": // Qrafty Garage
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
      );
    case "mail": // Contact Us
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={commonClasses}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
      );
    default:
      return null;
  }
};

interface SectionItem {
  id: string;
  label: string;
  icon?: string; // 新增图标字段
}

interface SectionNavProps {
  sections?: SectionItem[];
  className?: string;
}

// 更新默认数据，加入图标
const DEFAULT_SECTIONS: SectionItem[] = [
  { id: "section-1", label: "Qrafty-ai", icon: "cpu" },
  { id: "section-2", label: "Product Details", icon: "gear" },
  { id: "section-3", label: "Contact Us", icon: "mail" },
  { id: "section-4", label: "Qrafty Garage", icon: "wrench" },
];

// --- 2. 主组件 ---
export default function SectionNav({ sections = DEFAULT_SECTIONS, className = "" }: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  // 监听逻辑保持不变
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
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // 点击逻辑保持不变
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
        relative /* 增加 relative 以便内部绝对定位 */
        flex
        flex-col 
        /* 稍微减小间距，让工程感更紧凑 */
        gap-[1.8vw] 
        px-[1vw] py-[1vw]
        /* 增加左侧内边距，给垂直线留空间 */
        pl-[2.5vw]
        ${className}
      `}
    >
      {/* --- 工程蓝图主轴线 (垂直虚线) --- */}
      <div className="absolute left-[1vw] top-0 bottom-0 w-px border-l-2 border-dashed border-[#5C3A21]/30 pointer-events-none"></div>

      {sections.map((s) => {
        const active = s.id === activeId;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => handleClick(s.id)}
            // 添加 group 类以便 hover 状态控制内部元素
            className={`
              group
              relative
              wl-fs-32
              text-left
              flex items-center gap-[0.8vw]
              transition-all duration-300
              /* 强制使用等宽字体 */
              font-mono
              ${
                active
                  ? "text-[#5C3A21] font-bold scale-105" // 选中时稍微放大
                  : "text-[#5C3A21]/70 hover:text-[#5C3A21]"
              }
            `}
          >
            {/* --- 水平连接线 --- */}
            <div className={`
              absolute 
              /* 定位到按钮左侧外部 */
              right-full 
              top-1/2 -translate-y-1/2
              h-px
              /* 宽度连接到主轴 */
              w-[1.5vw]
              /* 与按钮内容的间距 */
              mr-[0.8vw]
              transition-all duration-300
              pointer-events-none
              ${active
                ? 'border-t-2 border-solid border-[#5C3A21]' // 选中项：实线、更粗
                : 'border-t border-dashed border-[#5C3A21]/30 group-hover:border-[#5C3A21]/60' // 未选中：虚线
              }
            `}></div>

            {/* 图标 */}
            <TechIcon type={s.icon} isActive={active} />
            
            {/* 文字 */}
            <span>{s.label}</span>
          </button>
        );
      })}
    </aside>
  );
}