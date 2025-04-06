import { unstable_createContext } from "react-router";
import { paraglideMiddleware } from "~/paraglide/server";
import type { Route } from "../+types/root";
import { getRequestType } from "../utils/get-request-type";

const localeContext = unstable_createContext<string>();

const localeMiddleware: Route.unstable_MiddlewareFunction = async ({
  request,
  context,
}) => {
  if (getRequestType(request) === "document") {
    return await paraglideMiddleware(request, async ({ locale }) => {
      context.set(localeContext, locale);
    });
  }
};

export { localeMiddleware, localeContext };
