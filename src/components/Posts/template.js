export const PostsBlockTemplate = {
  name: "posts",
  label: "Posts",
  fields: [
    {
      name: "items",
      label: "Posts",
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
          name: "description",
          label: "Description",
          type: "rich-text",
        },
        {
          name: "image",
          label: "Image",
          type: "image",
        },
      ],
    },
  ],
};
