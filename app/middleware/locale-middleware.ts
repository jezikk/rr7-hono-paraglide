import { unstable_createContext } from "react-router";
import { extractLocaleFromRequest } from "~/paraglide/runtime";
import { paraglideMiddleware } from "~/paraglide/server";
import type { Route } from "../+types/root";

const localeContext = unstable_createContext<string>();

const localeMiddleware: Route.unstable_MiddlewareFunction = async ({
  request,
  context,
}) => {
  return await paraglideMiddleware(request.clone(), ({ request }) => {
    const locale = extractLocaleFromRequest(request);
    context.set(localeContext, locale);
  });
};

export { localeMiddleware, localeContext };
