import React, { useState, useEffect } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import faq from "./faq.md";

export const FAQ = () => {
  let [readable, setReadable] = useState({ md: "" });

  useEffect(() => {
    fetch(faq)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, []);

  return (
    <div className="faq">
      <ReactMarkdown children={readable.md} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
