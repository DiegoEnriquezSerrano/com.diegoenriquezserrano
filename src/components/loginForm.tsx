"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import UserService from "@/services/UserService";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function attemptLogin(
    event: React.FormEvent<HTMLElement>,
  ): Promise<void> {
    event.preventDefault();

    const request = await UserService.Api.submitLogin({
      params: { password, email },
    });

    if (request.response.ok) {
      router.push("/dashboard");
    }
  }

  return (
    <form
      className={formClassName}
      onSubmit={attemptLogin}
      style={{ maxWidth: 500 }}
    >
      <label htmlFor="email" className={labelClassName}>
        Email
      </label>
      <input
        className={inputClassName}
        id="email"
        name="email"
        style={{ backdropFilter: "blur(10px)" }}
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label htmlFor="password" className={labelClassName}>
        Password
      </label>
      <input
        className={inputClassName}
        id="password"
        name="password"
        style={{ backdropFilter: "blur(10px)" }}
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button className={buttonClassName} type="submit">
        Submit
      </button>
    </form>
  );
}

const formClassName = classes([
  "border-color-turquoise",
  "border-rounded-32",
  "border-style-outset",
  "border-width-1",
  "flex-column",
  "overflow-hidden",
  "raised-2",
  "squeeze-48",
  "squish-48",
  "surface-featured-post",
  "full-width",
]);

const inputClassName = classes([
  "border-color-cyan",
  "border-rounded-8",
  "border-style-inset",
  "border-width-1",
  "squeeze-16",
  "squish-8",
  "stack-32",
  "surface-char-quasi-transparent",
  "text-color-cyan",
]);

const buttonClassName = classes([
  "border-color-char",
  "border-rounded-8",
  "border-style-outset",
  "drop-16",
  "raised-1",
  "squeeze-8",
  "squish-8",
  "surface-cyan",
]);

const labelClassName = classes(["stack-8", "text-medium"]);
