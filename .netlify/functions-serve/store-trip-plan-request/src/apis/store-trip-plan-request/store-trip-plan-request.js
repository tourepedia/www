var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// apis/store-trip-plan-request/store-trip-plan-request.ts
__export(exports, {
  handler: () => handler
});
var SEMBARK_API_BASE_URL = process.env.SEMBARK_API_BASE_URL;
var SEMBARK_API_ACCESS_TOKEN = process.env.SEMBARK_API_ACCESS_TOKEN;
var handler = async (event, context) => {
  if (event.httpMethod.toLowerCase() !== "post") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: "Method not allowed"
      }),
      headers: {
        allow: "post"
      }
    };
  }
  if (!SEMBARK_API_BASE_URL || !SEMBARK_API_ACCESS_TOKEN) {
    const errors = {};
    if (!SEMBARK_API_BASE_URL) {
      errors["SEMBARK_API_BASE_URL"] = [
        "Missing `SEMBARK_API_BASE_URL environment variable"
      ];
    }
    if (!SEMBARK_API_ACCESS_TOKEN) {
      errors["SEMBARK_API_ACCESS_TOKEN"] = [
        "Missing `SEMBARK_API_ACCESS_TOKEN` environment variable"
      ];
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Missing environment variables",
        errors
      })
    };
  }
  let body = {};
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: "Malformed request body"
      })
    };
  }
  const {
    name,
    phone_number,
    email,
    destination,
    start_date,
    no_of_days,
    no_of_adults,
    no_of_children,
    hotel_preference,
    comments,
    trip_source
  } = body;
  const data = {
    name,
    phone_number,
    email,
    destination,
    start_date,
    no_of_days,
    no_of_adults,
    no_of_children,
    hotel_preference,
    comments,
    trip_source: trip_source || "Website"
  };
  return {
    statusCode: 200,
    body: JSON.stringify({
      data,
      SEMBARK_API_BASE_URL,
      SEMBARK_API_ACCESS_TOKEN
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=store-trip-plan-request.js.map
