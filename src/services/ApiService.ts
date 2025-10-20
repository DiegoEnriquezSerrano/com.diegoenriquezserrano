import ApiTypes from "@/types/ApiTypes";

namespace ApiService {
  export namespace V1 {
    async function send<T>({
      base,
      bearer,
      credentials = "same-origin",
      data,
      method,
      path,
    }: ApiTypes.V1.SendParams): Promise<{ json: T; response: Response }> {
      const opts: ApiTypes.V1.RequestOpts = {
        credentials,
        headers: new Headers(),
        method,
      };

      const fullPath = {
        host: encodeURI(base),
        pathname: encodeURI(path),
        search: "",
      };

      if (
        [
          process.env.NEXT_PUBLIC_API_URL,
          process.env.NEXT_PUBLIC_SSR_API_URL,
        ].includes(base) &&
        credentials !== "omit"
      ) {
        opts.credentials = "include";
      }

      if (bearer) {
        opts.headers.set("Authorization", `Bearer ${bearer}`);
      }

      if (data) {
        if (method === "GET") {
          fullPath.search = buildQueryString(data);
        } else {
          if (!data.type) {
            opts.headers.set("Content-Type", "application/json");
            opts.body = JSON.stringify(data);
          }

          if (data.type === "formData") {
            const formData = new FormData();
            opts.body = formData;
          }
        }
      }

      const { host, pathname, search } = fullPath;
      const response = await fetch(`${host}/${pathname}${search}`, opts);
      const json = await response.json();

      if (process.env.VITE_DEBUG) {
        console.log("DEBUG: ", method, fullPath);
        console.log("DEBUG: ", opts);
        console.log("DEBUG: ", response);
        console.log("DEBUG: ", json);
      }

      return { response, json };
    }

    export function get<T>(
      params: ApiTypes.V1.RequestParams,
    ): Promise<{ json: T; response: Response }> {
      const { base, path, opts } = params;

      return send({
        base,
        bearer: opts?.bearer,
        data: opts?.data,
        method: "GET",
        path,
      });
    }

    export function del<T>(
      params: ApiTypes.V1.RequestParams,
    ): Promise<{ json: T; response: Response }> {
      const { base, path, opts } = params;

      return send({
        base,
        bearer: opts?.bearer,
        data: opts?.data,
        method: "DELETE",
        path,
      });
    }

    export function post<T>(
      params: ApiTypes.V1.RequestParams,
    ): Promise<{ json: T; response: Response }> {
      const { base, path, opts } = params;

      return send({
        base,
        bearer: opts?.bearer,
        credentials: opts?.credentials,
        data: opts?.data,
        method: "POST",
        path,
      });
    }

    export function put<T>(
      params: ApiTypes.V1.RequestParams,
    ): Promise<{ json: T; response: Response }> {
      const { base, path, opts } = params;

      return send({
        base,
        bearer: opts?.bearer,
        credentials: opts?.credentials,
        data: opts?.data,
        method: "PUT",
        path,
      });
    }

    export function patch<T>(
      params: ApiTypes.V1.RequestParams,
    ): Promise<{ json: T; response: Response }> {
      const { base, path, opts } = params;

      return send({
        base,
        bearer: opts?.bearer,
        credentials: opts?.credentials,
        data: opts?.data,
        method: "PATCH",
        path,
      });
    }
  }
}

export default ApiService;

function buildQueryString<T>(params: Record<PropertyKey, T>): string {
  let queryString = "";

  Object.entries(params).forEach(([key, value]) => {
    !!queryString ? (queryString += "&") : (queryString += "?");

    if (!Array.isArray(value))
      queryString += new URLSearchParams({ [key]: String(value) }).toString();
    else
      value.forEach((record, i) => {
        if (i > 0) queryString += "&";

        queryString += `${encodeURIComponent(`${key}[]`)}=${encodeURIComponent(
          record,
        )}`;
      });
  });

  return queryString;
}
