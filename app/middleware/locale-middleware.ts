import { paraglideMiddleware } from "~/paraglide/server";
import type { Route } from "../+types/root";

const localeMiddleware: Route.unstable_MiddlewareFunction = async (
  { request },
  next,
) => {
  const response = await paraglideMiddleware(request, () => {
    return next();
  });

  if (response.status === 307) {
    throw response;
  }

  return response;
};

export { localeMiddleware };
