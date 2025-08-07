"use client";

import { useState } from "react";
import { classes } from "@/utils";
import { FlashMessageService } from "@/services/FlashMessageService";
import type { FlashMessageType } from "@/types/FlashMessageTypes";

export default function FlashMessage() {
  const [flashMessages, setFlashMessages] = useState<FlashMessageType[]>([]);

  if (typeof window !== "undefined") {
    Object.assign(window, {
      flash: { messages: flashMessages, setMessages: setFlashMessages },
    });
  }

  return (
    <>
      <div
        id="flash-message-container"
        className={flashMessageContainerClassName}
      >
        {flashMessages.map((message) => {
          return (
            <div
              key={message.id}
              data-flash={message.type}
              className="border-rounded-8 border-width-2 border-style-outset squeeze-16 squish-8 drop-16 raised-2"
              onClick={() => FlashMessageService.popMessage(message.id)}
              style={{ maxWidth: 500 }}
            >
              {message?.title ? (
                <div>
                  <h2 className="font-weight-800">{message.title}</h2>
                  <p>{message.message}</p>
                </div>
              ) : (
                <p>{message.message}</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const flashMessageContainerClassName = classes([
  "align-items-center",
  "drop-0",
  "flex-column",
  "flex-direction-column-reverse",
  "font-orbitron-medium",
  "font-weight-bold",
  "gap-8",
  "justify-content-center",
  "position-fixed",
  "pull-0",
  "push-0",
  "squeeze-0",
  "squish-0",
  "stack-0",
  "text-medium",
  "width-view-100",
]);
