import React, { useRef, useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { faq } from "./faq.md.js";

export const FAQ = () => {
  let [readable, setReadable] = useState({ md: "" });

  const faqRef = useRef(null);
  useEffect(() => {
    faqRef.current.focus();
  });

  useEffect(() => {
    setReadable({ md: faq });
  }, []);

  return (
    <div className="faq" tabIndex={-1} ref={faqRef} style={{ outline: "none" }}>
      <ReactMarkdown children={readable.md} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
