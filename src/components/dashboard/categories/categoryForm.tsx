"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import CategoryService from "@/services/CategoryService";

const { createDashboardCategory } = CategoryService.Api;

export default function CategoryForm() {
  const router = useRouter();

  const [name, setName] = useState("");

  async function attemptCategoryCreate(
    event: React.FormEvent<HTMLElement>,
  ): Promise<void> {
    event.preventDefault();

    const request = await createDashboardCategory({
      params: { name },
    });

    if (request.response.ok) {
      if (process.env.VITE_DEBUG) {
        console.log("category: ", request.response);
      }

      router.push(`/dashboard/categories/${request.json.slug}`);
    }
  }

  return (
    <form
      className="flex-column full-width align-items-center"
      style={{ maxWidth: 600 }}
      onSubmit={attemptCategoryCreate}
    >
      <fieldset className="flex-column stack-16 squeeze-16 squish-0 full-width">
        <label htmlFor="name" className="stack-16">
          Name
        </label>
        <input
          className={inputClassName}
          id="name"
          name="name"
          placeholder="Category name"
          style={{ backdropFilter: "blur(10px)" }}
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </fieldset>
      <button
        type="submit"
        className={buttonClassName}
        style={{ maxWidth: 250 }}
      >
        Submit
      </button>
    </form>
  );
}

const inputClassName = classes([
  "surface-char",
  "border-color-cyan",
  "border-style-inset",
  "border-width-1",
  "border-rounded-16",
  "text-color-cyan",
  "squeeze-16",
  "squish-16",
]);

const buttonClassName = classes([
  "border-color-cyan",
  "border-rounded-16",
  "border-style-outset",
  "border-width-2",
  "dim-80",
  "flash-100",
  "raised-1",
  "surface-cyan",
  "full-width",
  "squish-8",
  "cursor-pointer",
]);
