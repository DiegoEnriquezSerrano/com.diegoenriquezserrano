"use client";

import { FocusEvent, FormEvent, InputEvent, useState } from "react";
import { classes } from "@/utils";
import { errorMessages } from "@/utils/apiUtils";
import { delay } from "@/utils/clientUtils";
import Icon from "@/components/icon";
import SubscribeModal from "@/components/subscribeModal";
import ChallengeService from "@/services/ChallengeService";
import SubscriptionService from "@/services/SubscriptionService";
import FlashMessageService from "@/services/FlashMessageService";

export default function NavSubscriptionForm() {
  const [challengeAnswer, setChallengeAnswer] = useState("");
  const [challengeImage, setChallengeImage] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [redoDisabled, setRedoDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const [signedAnswer, setSignedAnswer] = useState("");

  async function refreshChallenge(): Promise<void> {
    const { response, json } = await ChallengeService.Api.getChallenge();

    if (response.ok) {
      setSignedAnswer(json["signed_answer"]);
      setChallengeImage(`data:image/png;base64, ${json["challenge_image"]}`);
      setChallengeAnswer("");
      setRedoDisabled(true);
      await delay(3, "s");
      setRedoDisabled(false);
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { response, json } = await ChallengeService.Api.getChallenge();

    if (response.ok) {
      setSignedAnswer(json["signed_answer"]);
      setChallengeImage(`data:image/png;base64, ${json["challenge_image"]}`);
      setShow(true);
      setTimeout(() => setOpen(true), 1);
    }
  }

  function handleEmailChange(
    event: InputEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) {
    setEmail(event.target.value);
  }

  function handleNameChange(
    event: InputEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) {
    setName(event.target.value);
  }

  async function handleSubscribeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { response, json } =
      await SubscriptionService.Api.attemptCreateSubscription({
        params: {
          email,
          name,
          signed_answer: signedAnswer,
          challenge_answer: challengeAnswer,
        },
      });

    if (response.ok) {
      console.log(json);
    } else {
      FlashMessageService.announceErrors(errorMessages(json));

      await refreshChallenge();
    }
  }

  function handleChallengeAnswerChange(
    event: InputEvent<HTMLInputElement> & { target: HTMLInputElement },
  ) {
    setChallengeAnswer(event.target.value);
  }

  function close(_event: FocusEvent<HTMLButtonElement>): void {
    setOpen(false);
    setTimeout(() => setShow(false), 100);
    setChallengeAnswer("");
    setChallengeImage(null);
  }

  return (
    <section className="flex-column" style={{ maxWidth: 450, minWidth: 280 }}>
      <p className="text-color-white stack-16">
        Want new posts to be sent directly to your inbox? Sign up for my
        newsletter!
      </p>
      <form className="flex-row gap-8" onSubmit={handleSubmit}>
        <input
          className={subscribeFormInput}
          name="email"
          onChange={handleEmailChange}
          placeholder="contact@example.com"
          type="email"
          value={email}
        />
        <button className={subscribeFormButtonClassName} type="submit">
          <figure className="transform-rotate-270 flex-row">
            <Icon type="angle" />
          </figure>
        </button>
      </form>
      {show ? (
        <SubscribeModal open={open} close={close}>
          <form
            className="flex-column full-width squeeze-16 gap-8"
            onSubmit={handleSubscribeSubmit}
            style={{ maxWidth: 600 }}
          >
            <fieldset className="flex-column full-width gap-8">
              <input
                className={modalInputClassName}
                id="email"
                name="email"
                onChange={handleEmailChange}
                placeholder="contact@example.com"
                required
                value={email}
              />
              <label htmlFor="email">Email*</label>
            </fieldset>
            <fieldset className="flex-column full-width gap-8">
              <input
                className={modalInputClassName}
                id="name"
                name="name"
                onChange={handleNameChange}
                placeholder="Jon Snow"
                value={name}
              />
              <label htmlFor="name">Name</label>
            </fieldset>
            <fieldset className="flex-column align-items-center gap-16">
              <figure className="flex-row flex-wrap-wrap gap-8 justify-content-center">
                {!!challengeImage ? (
                  <img src={challengeImage} width={320} height={120} />
                ) : (
                  <span></span>
                )}

                <button
                  className="surface-char text-color-cyan border-width-0"
                  data-redo-button
                  disabled={redoDisabled}
                  onClick={refreshChallenge}
                  type="button"
                >
                  <div style={{ pointerEvents: "none" }}>
                    <Icon type="redo" />
                  </div>
                </button>
              </figure>
              <div className="flex-row gap-8 flex-wrap-wrap justify-content-center">
                <input
                  className={modalInputClassName}
                  id="challenge"
                  name="challenge"
                  onChange={handleChallengeAnswerChange}
                  required
                  value={challengeAnswer}
                />
              </div>
              <input
                id="signedAnswer"
                name="signedAnswer"
                required
                type="hidden"
                value={signedAnswer}
              />
              <label htmlFor="challenge">Challenge*</label>
            </fieldset>
            <div className="full-width justify-content-center align-items-center flex-row">
              <button className={submitButtonClassName} type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </SubscribeModal>
      ) : (
        <br />
      )}
    </section>
  );
}

const modalInputClassName = classes([
  "border-color-cyan",
  "border-rounded-16",
  "border-style-inset",
  "border-width-1",
  "squeeze-16",
  "squish-8",
  "surface-char",
  "text-color-cyan",
]);

const submitButtonClassName = classes([
  "border-color-cyan",
  "border-rounded-16",
  "border-style-outset",
  "border-with-1",
  "cursor-pointer",
  "flex-row",
  "justify-content-center",
  "squeeze-16",
  "squish-8",
  "surface-cyan",
  "text-color-black",
]);

const subscribeFormInput = classes([
  "border-color-turquoise",
  "border-rounded-16",
  "border-style-outset",
  "full-width",
  "raised-1",
  "squeeze-16",
  "squish-8",
  "surface-char",
  "text-color-cyan",
]);

const subscribeFormButtonClassName = classes([
  "border-color-turquoise",
  "border-rounded-16",
  "border-style-outset",
  "cursor-pointer",
  "raised-1",
  "squeeze-8",
  "squish-8",
  "surface-cyan-quasi-transparent",
  "text-color-black",
]);
