import { unstable_createContext } from "react-router";
import { paraglideMiddleware } from "~/paraglide/server";
import type { Route } from "../+types/root";

const localeContext = unstable_createContext<string>();

// https://github.com/opral/inlang-paraglide-js/issues/449
const localeMiddleware: Route.unstable_MiddlewareFunction = async (
  { request, context },
  next,
) => {
  return await paraglideMiddleware(request, ({ locale }) => {
    context.set(localeContext, locale);
    return next();
  });
};

export { localeMiddleware, localeContext };
