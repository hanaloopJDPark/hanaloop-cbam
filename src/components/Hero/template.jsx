import React from "react";

export const HeroBlockTemplate = {
  name: "hero",
  label: "Hero",
  fields: [
    {
      name: "title",
      label: "Title",
      description: "edit test",
      type: "string",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      description: "By default this is the site tagline",
      type: "string",
    },
    {
      label: "Document Link",
      name: "document",
      type: "reference",
      collections: ["doc"],
    },
    {
      name: "documentLabel",
      label: "Button Text",
      type: "string",
    },
  ]
};
