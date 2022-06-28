export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62bb25a7b612740084f3b03c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-bbf9n5eu",
                  apiId: "53271d83-9302-4c6e-9054-4d50bbfff2ed",
                },
                {
                  buildHookId: "62bb25a783d53434d885ad6c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kq5wvtsh",
                  apiId: "7f2cea91-592c-4a8e-860d-01135ba2a4af",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/codyhall10/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kq5wvtsh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
