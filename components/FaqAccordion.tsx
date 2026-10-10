"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div>
      {items.map((f, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? "open" : ""}`}>
          <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span>{f.q}</span>
            <span>{openIdx === i ? "–" : "+"}</span>
          </button>
          <div className="faq-a">
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
