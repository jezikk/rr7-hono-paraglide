import { paraglideMiddleware } from "~/paraglide/server";
import type { Route } from "../+types/root";

// https://github.com/opral/inlang-paraglide-js/issues/449
const localeMiddleware: Route.unstable_MiddlewareFunction = async (
  { request },
  next,
) => {
  return await paraglideMiddleware(request, ({ request: localizedRequest }) => {
    return next();
  });
};

export { localeMiddleware };
