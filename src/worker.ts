interface Env {
  ASSETS: Fetcher;
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.protocol === "http:" || url.hostname === "www.kompaktapp.com") {
      url.protocol = "https:";
      url.hostname = "kompaktapp.com";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
