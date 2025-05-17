import type { Config } from "@react-router/dev/config";

export default {
  future: {
    unstable_splitRouteModules: true,
    unstable_viteEnvironmentApi: true,
    unstable_middleware: true,
  },
  ssr: true,
} satisfies Config;
