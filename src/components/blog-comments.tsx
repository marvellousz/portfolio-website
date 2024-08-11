"use client";

import Giscus from "@giscus/react";

export const BlogComments = () => {
  return (
    <Giscus
      repo="Marvellousz/Portfolio-Website"
      repoId="R_kgDOMiE8EA"
      category="Announcements"
      categoryId="DIC_kwDOKdCDls4CZ7ll"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};
