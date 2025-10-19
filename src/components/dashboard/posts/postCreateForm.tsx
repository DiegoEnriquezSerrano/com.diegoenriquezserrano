"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import PostService from "@/services/PostService";
import MultiCheckbox from "@/components/form/multiCheckbox";
import type { CategoryType } from "@/types/CategoryTypes";

type PostCreateFormProps = { categories: CategoryType[] };

const { createDashboardPost } = PostService.Api;

export default function PostCreateForm({ categories }: PostCreateFormProps) {
  const router = useRouter();

  let selectedCategories: string[] = [];

  const [categoryIds, setCategoryIds] = useState(selectedCategories);
  const [body, setBody] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [excerpt, setAbstract] = useState("");
  const [featured, setFeatured] = useState(false);
  const [title, setTitle] = useState("");

  async function attemptPostCreate(
    event: React.FormEvent<HTMLElement>,
  ): Promise<void> {
    event.preventDefault();

    const params = {
      body,
      cover_image_url: coverImageUrl,
      description,
      excerpt,
      featured,
      title,
      categories: categoryIds.map(Number),
    };

    const request = await createDashboardPost({ params });

    if (request.response.ok) {
      if (process.env.VITE_DEBUG) {
        console.log("post: ", request.response);
      }

      router.push(`/dashboard/posts/${request.json.slug}`);
    }
  }

  return (
    <form
      className="flex-column full-width align-items-center gap-24"
      style={{ maxWidth: 600 }}
      onSubmit={attemptPostCreate}
    >
      <fieldset className="flex-column gap-8 squeeze-16 squish-0 full-width">
        <label htmlFor="title">Title</label>
        <input
          className={inputClassName}
          id="title"
          name="title"
          placeholder="The Impact of Urban Green Spaces on Community Well-Being"
          required
          style={{ backdropFilter: "blur(10px)" }}
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </fieldset>
      <fieldset className="flex-column gap-8 squeeze-16 squish-0 full-width">
        <label htmlFor="coverImageUrl">Cover image URL</label>
        <input
          className={inputClassName}
          id="coverImageUrl"
          name="coverImageUrl"
          placeholder="https://www.example.com/image.jpg"
          required
          style={{ backdropFilter: "blur(10px)" }}
          type="text"
          value={coverImageUrl}
          onChange={(event) => {
            setCoverImageUrl(event.target.value);
          }}
        />
      </fieldset>
      <fieldset className="flex-column gap-8 squeeze-16 squish-0 full-width">
        <label htmlFor="description">Description</label>
        <textarea
          className={inputClassName}
          id="description"
          name="description"
          placeholder="Green spaces filter air, cool cities, boost exercise, mental health, and social ties. Underserved areas need targeted investment, equity planning, and community partnerships for inclusivity."
          required
          style={{ backdropFilter: "blur(10px)" }}
          value={description}
          rows={4}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </fieldset>
      <fieldset className="flex-column gap-8 squeeze-16 squish-0 full-width">
        <label htmlFor="abstract">Abstract</label>
        <textarea
          className={inputClassName}
          id="abstract"
          name="abstract"
          placeholder="Urban green spaces boost air quality, reduce stress, promote exercise, and strengthen community ties. Equitable planning and local stewardship ensure all neighborhoods gain these health and environmental benefits."
          required
          style={{ backdropFilter: "blur(10px)" }}
          value={excerpt}
          rows={4}
          onChange={(event) => {
            setAbstract(event.target.value);
          }}
        />
      </fieldset>
      <fieldset className="flex-column gap-8 squeeze-16 squish-0 full-width">
        <label htmlFor="body">Body</label>
        <textarea
          className={inputClassName}
          id="body"
          name="body"
          placeholder="Urban green spaces have become essential components of healthy cities, offering a multifaceted response to challenges such as air pollution, urban heat islands, and social fragmentation. Trees and shrubs in parks and along streets play a critical role in trapping particulate matter and absorbing gaseous pollutants, thereby improving air quality and reducing respiratory ailments among city dwellers. Moreover, vegetation cools urban areas through shade and evapotranspiration, lowering energy demands for air conditioning and mitigating heat-related health risks."
          required
          style={{ backdropFilter: "blur(10px)" }}
          value={body}
          rows={8}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </fieldset>
      <fieldset
        className="grid gap-8 align-items-center justify-content-start justify-items-start align-content-start full-width squish-0 squeeze-16"
        style={{ gridTemplateColumns: "2rem 1fr" }}
      >
        <input
          checked={featured}
          className={checkboxClassName}
          id="featured"
          name="featured"
          type="checkbox"
          onChange={(event) => {
            setFeatured(event.target.checked);
          }}
        />
        <label className="text-color-cyan" htmlFor="featured">
          Featured post?
        </label>
      </fieldset>
      <div className="full-width squeeze-16">
        <h2 className="full-width stack-16">Categories</h2>
        <MultiCheckbox
          objectKey="id"
          label="name"
          objects={categories}
          selection={categoryIds}
          onChange={setCategoryIds}
          fieldName="categories"
        />
      </div>
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

const checkboxClassName = classes([
  "cursor-pointer",
  "border-color-cyan",
  "border-rounded-8",
  "border-style-outset",
  "border-width-2",
  "custom-checkbox",
  "drop-0",
  "font-orbitron",
  "grid",
  "pull-0",
  "push-0",
  "stack-0",
  "surface-cyan",
  "text-color-black",
  "dim-80",
  "flash-100",
]);

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
