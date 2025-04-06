import { unstable_createContext } from "react-router";
import { paraglideMiddleware } from "~/paraglide/server";
import { getRequestType } from "~/utils/get-request-type";
import type { Route } from "../+types/root";

const localeContext = unstable_createContext<string>();

const localeMiddleware: Route.unstable_MiddlewareFunction = async ({
  request,
  context,
}) => {
  if (getRequestType(request) === "document") {
    return await paraglideMiddleware(request, ({ locale }) => {
      context.set(localeContext, locale);
    });
  }
};

export { localeMiddleware, localeContext };
