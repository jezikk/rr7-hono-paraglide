import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterDevTools } from "react-router-devtools";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouterHonoServer(),
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./app/paraglide",
      cookieName: "app_locale",
      strategy: ["url"],
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
            ["cs", "/:path(.*)?"],
          ],
        },
      ],
    }),
  ],
});
