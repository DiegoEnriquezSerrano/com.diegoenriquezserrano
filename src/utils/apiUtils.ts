import ApiTypes from "@/types/ApiTypes";
import { ErrorMessage } from "@/types/FlashMessageTypes";

// For dockerized dev environment. SSR fetch only works on
// service alias, but client requests need to reach localhost.
// In production the variables should be equal.
export function findApiTarget(): string {
  if (
    typeof process.env.NEXT_PUBLIC_SSR_API_URL == "string" &&
    typeof process.env.NEXT_PUBLIC_API_URL == "string"
  ) {
    if (typeof window == "undefined") {
      return process.env.NEXT_PUBLIC_SSR_API_URL;
    } else {
      return process.env.NEXT_PUBLIC_API_URL;
    }
  }

  throw {
    message: {
      type: "Required environment variables are not set.",
      currentValues: {
        NEXT_PUBLIC_SSR_API_URL: process.env.NEXT_PUBLIC_SSR_API_URL,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      },
    },
  };
}

export function errorMessages(body: ApiTypes.V1.ErrorMessages): ErrorMessage[] {
  let errors: ErrorMessage[] = [];

  if (body["detail"]) {
    errors.push(body["detail"]);
    delete body["detail"];
  }

  if (body["non_field_errors"]) {
    errors.push(...body["non_field_errors"]);
    delete body["non_field_errors"];
  }

  Object.entries(body).forEach(
    ([key, value]: [PropertyKey, string | string[] | undefined]) => {
      errors.push([key, String(value)]);
    },
  );

  return errors;
}
