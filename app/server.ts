import { createHonoServer } from "react-router-hono-server/node";
import { paraglideMiddleware } from "./paraglide/server";

export default await createHonoServer({
  beforeAll(app) {
    app.use(async (c, next) => {
      return await paraglideMiddleware(c.req.raw, ({ request }) => {
        c.req.raw = request;
        return next();
      });
    });
  },
});
