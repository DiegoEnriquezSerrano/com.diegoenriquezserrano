import { Dispatch, SetStateAction } from "react";

export type FlashMessageType = {
  id: string;
  message: string;
  type: "notice" | "warning" | "error" | "success";
  title?: string;
};

type Getter = FlashMessageType[];

type Setter = Dispatch<SetStateAction<FlashMessageType[]>>;

type Flash = { messages: Getter; setMessages: Setter };

export interface AppWindow extends Window {
  flash: Flash;
}

export type ErrorMessage = string | [PropertyKey, string];

export type SuccessMessage = string;
