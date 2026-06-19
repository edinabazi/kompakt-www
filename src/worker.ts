import { withAICrawlerTracking } from "@datafast/ai-crawl";

interface Env {
  ASSETS: Fetcher;
}

const handleRequest = async (request: Request, env: Env): Promise<Response> => {
  const url = new URL(request.url);

  if (url.protocol === "http:" || url.hostname === "www.kompaktapp.com") {
    url.protocol = "https:";
    url.hostname = "kompaktapp.com";
    return Response.redirect(url.toString(), 301);
  }

  if (url.pathname === "/js/script.js") {
    return fetch("https://datafa.st/js/script.js", {
      headers: {
        "User-Agent": request.headers.get("User-Agent") || "",
      },
    });
  }

  if (url.pathname === "/api/events" && request.method === "POST") {
    const clientIp =
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("cf-connecting-ip") ||
      "";

    const response = await fetch("https://datafa.st/api/events", {
      method: "POST",
      headers: {
        "Content-Type": request.headers.get("Content-Type") || "application/json",
        "User-Agent": request.headers.get("User-Agent") || "",
        Origin: request.headers.get("Origin") || url.origin,
        "x-datafast-real-ip": clientIp,
      },
      body: request.body,
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/json",
      },
    });
  }

  return env.ASSETS.fetch(request);
};

export default {
  fetch: withAICrawlerTracking(handleRequest, {
    websiteId: "dfid_zKNTQ6kGOOkD9gKCvyZUs",
    domain: "kompaktapp.com",
  }),
} satisfies ExportedHandler<Env>;
