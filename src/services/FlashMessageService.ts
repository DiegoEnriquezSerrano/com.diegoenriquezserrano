"use client";

import { delay } from "@/utils/clientUtils";
import type {
  AppWindow,
  FlashMessageType,
  ErrorMessage,
  SuccessMessage,
} from "@/types/FlashMessageTypes";

export namespace FlashMessageService {
  export function pushMessage(message: FlashMessageType): void {
    const appWindow = (<unknown>window) as AppWindow;

    appWindow.flash.setMessages([...appWindow.flash.messages, message]);

    Promise.resolve(delay(5, "s")).then(() => popMessage(message.id));
  }

  export function popMessage(id: string): void {
    const appWindow = (<unknown>window) as AppWindow;

    appWindow.flash.setMessages(
      appWindow.flash.messages.filter((message) => message.id !== id),
    );
  }

  export function announceErrors(errors: ErrorMessage[]) {
    errors.forEach((error) => {
      if (typeof error == "string") {
        pushMessage({
          type: "error",
          id: Date.now().toString(),
          message: error,
        });
      } else {
        pushMessage({
          type: "error",
          id: Date.now().toString(),
          message: error[1],
          title: error[0].toString(),
        });
      }
    });
  }

  export function announceSuccess(message: SuccessMessage) {
    pushMessage({
      type: "success",
      id: Date.now().toString(),
      message,
    });
  }
}

export default FlashMessageService;
