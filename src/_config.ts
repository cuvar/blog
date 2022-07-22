import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume();
site.use(date());
site.use(metas());
site.use(terser());
site.use(codeHighlight());

// site.copy("favicon.ico");
// site.copy("blog/media");
site.remoteFile(
  "_includes/css/code.css",
  "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/styles/github-dark.min.css",
);

// site.copy("_includes/css/code.css");

export default site;
