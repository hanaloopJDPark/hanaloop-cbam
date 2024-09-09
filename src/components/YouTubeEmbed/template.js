export const YouTubeEmbedBlockTemplate = {
  name: "youTubeEmbed",
  label: "YouTube Embed",
  fields: [
    {
      name: "videos",
      label: "YouTube Embed",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.title,
        }),
      },
      fields: [
        { 
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "url",
          label: "YouTube URL",
          type: "string",
        },
        {
          name: "caption",
          label: "Caption",
          type: "string",
        },
      ]
    }
  ]
};
