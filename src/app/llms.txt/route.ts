import { getAgentMarkdown } from "@/data/portfolio";

export const dynamic = "force-static";

export function GET() {
  return new Response(getAgentMarkdown(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
