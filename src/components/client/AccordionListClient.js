"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

export default function AccordionListClient({
  items,
  defaultOpen = 0,
  variant = "light",
  questionClassName = "",
  answerClassName = "",
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const light = variant === "light";

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question || item.title}
            className={
              light
                ? "overflow-hidden rounded-[1.35rem] border border-white/8 bg-white/95 text-[#16313b]"
                : "overflow-hidden rounded-[1.2rem] border border-[#d6e4df] bg-white/80"
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left ${questionClassName}`}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold leading-7 ${light ? "text-[#16313b]" : "text-[#16313b]"}`}>
                {item.question || item.title}
              </span>

              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  isOpen ? "bg-[#18b7ae] text-white" : light ? "bg-[#edf8f6] text-[#10978f]" : "bg-[#16313b] text-white"
                }`}
              >
                {isOpen ? <ChevronDown className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>

            {isOpen && (
              <div
                className={`px-5 pb-5 pt-0 text-[15px] leading-8 ${light ? "text-[#5f7480]" : "text-[#5f7480]"} ${answerClassName}`}
              >
                {item.content || item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
