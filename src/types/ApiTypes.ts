namespace ApiTypes {
  export namespace V1 {
    export type SendParams = {
      base: string;
      bearer?: string;
      credentials?: RequestCredentials;
      data?: Record<PropertyKey, any>;
      method: RequestInit["method"];
      path: string;
    };

    export type RequestParams = {
      base: string;
      path: string;
      opts?: {
        bearer?: string;
        credentials?: RequestCredentials;
        data?: Record<PropertyKey, any>;
      };
    };

    export type RequestOpts = {
      body?: FormData | Blob | URLSearchParams | string;
      credentials: RequestCredentials;
      headers: Request["headers"];
      method: RequestInit["method"];
    };

    export type RequestArguments = {
      params?: Record<PropertyKey, any>;
      session?: string;
    };

    export type ShowArguments = {
      id: string;
      session?: string;
    };

    export type ErrorMessages = {
      detail?: string;
      non_field_errors?: string[];
      [key: PropertyKey]: string | string[] | undefined;
    };
  }
}

export default ApiTypes;
