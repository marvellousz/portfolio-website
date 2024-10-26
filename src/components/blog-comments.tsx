"use client";
import Giscus from "@giscus/react";

export const BlogComments = () => {
  return (
    <Giscus
      repo="Marvellousz/Portfolio-Website"
      repoId="R_kgDOMiE8EA"
      category="Announcements"
      categoryId="DIC_kwDOMiE8EM4ChiwA"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="dark_protanopia"
      lang="en"
      loading="lazy"
    />
  );
};