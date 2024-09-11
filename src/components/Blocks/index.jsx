import React from "react";
import { Posts } from "../Posts";
import { Hero } from "../Hero";
import { YouTubeEmbed } from "../YouTubeEmbed";
import {ExplainPanel} from "../ExplainPanel";

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks
        ? blocks.map(function (block, i) {
            switch (block._template) {
              case "hero":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <Hero data={block} index={i} />
                  </div>
                );
              case "posts":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <Posts data={block} index={i} />
                  </div>
                );
              case "explain":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <ExplainPanel data={block} index={i}/>
                  </div>
                );
              case "youTubeEmbed":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block._template}>
                    <YouTubeEmbed data={block} index={i} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
