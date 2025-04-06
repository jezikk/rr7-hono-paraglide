export function getRequestType(request: Request) {
  if (request.headers.get("Sec-Fetch-Dest") === "document") {
    return "document" as const;
  }

  return "fetch" as const;
}
