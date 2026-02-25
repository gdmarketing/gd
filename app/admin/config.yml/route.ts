export async function GET() {
  const yml = `
backend:
  name: git-gateway
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "pages"
    label: "Pages"
    files:
      - label: "Homepage"
        name: "home"
        file: "content/home.md"
        fields:
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Body", name: "body", widget: "markdown" }
`;
  return new Response(yml, {
    headers: { "Content-Type": "text/yaml" },
  });
}
