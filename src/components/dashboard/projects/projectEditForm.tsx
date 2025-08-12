"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import ProjectService from "@/services/ProjectService";
import RadioGroup from "@/components/form/radioGroup";
import CommaSeparatedValueInput from "@/components/form/csvInput";
import type { ProjectType } from "@/types/ProjectTypes";

const { updateDashboardProject, prepareCreateParams } = ProjectService.Api;

export default function ProjectEditForm({ project }: { project: ProjectType }) {
  const router = useRouter();

  const { initFinishedAt, initStartedAt, initTools } =
    ProjectService.getInitialFormValues(project);

  const [body, setBody] = useState(project.body);
  const [coverImageUrl, setCoverImageUrl] = useState(project.cover_image_url);
  const [description, setDescription] = useState(project.description);
  const [finishedAt, setFinishedAt] = useState(initFinishedAt);
  const [startedAt, setStartedAt] = useState(initStartedAt);
  const [status, setStatus] = useState(project.status);
  const [title, setTitle] = useState(project.title);
  const [tools, setTools] = useState(initTools);
  const [url, setUrl] = useState(project.url);

  async function attemptProjectUpdate(
    event: React.FormEvent<HTMLElement>,
  ): Promise<void> {
    event.preventDefault();

    const params = prepareCreateParams({
      body,
      coverImageUrl,
      description,
      finishedAt,
      startedAt,
      status,
      title,
      tools,
      url,
    });

    const request = await updateDashboardProject(project.slug, { params });

    if (request.response.ok) {
      if (process.env.VITE_DEBUG) {
        console.log("project: ", request.response);
      }

      router.push(`/dashboard/projects/${request.json.slug}`);
    }
  }

  return (
    <form
      className="flex-column full-width align-items-center gap-24"
      style={{ maxWidth: 600 }}
      onSubmit={attemptProjectUpdate}
    >
      <fieldset
        id="title-field"
        className="flex-column gap-8 squeeze-16 squish-0 full-width"
      >
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
      <fieldset
        id="cover-image-url-field"
        className="flex-column gap-8 squeeze-16 squish-0 full-width"
      >
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
      <fieldset
        id="description-field"
        className="flex-column gap-8 squeeze-16 squish-0 full-width"
      >
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
      <fieldset
        id="body-field"
        className="flex-column gap-8 squeeze-16 squish-0 full-width"
      >
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
        id="url-field"
        className="flex-column gap-8 squeeze-16 squish-0 full-width"
      >
        <label htmlFor="url">URL</label>
        <input
          className={inputClassName}
          id="url"
          name="url"
          placeholder="https://www.example.com/image.jpg"
          required
          style={{ backdropFilter: "blur(10px)" }}
          type="text"
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
          }}
        />
      </fieldset>
      <div className="full-width flex-column gap-8">
        <h2 className="full-width squeeze-16">Status</h2>
        <RadioGroup
          objectKey="name"
          label="name"
          objects={[{ name: "ongoing" }, { name: "completed" }]}
          selection={status}
          onChange={setStatus}
          fieldName="categories"
        />
      </div>
      <fieldset
        className="grid gap-8 squeeze-16 squish-0 full-width"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1rem auto",
        }}
      >
        <label htmlFor="startedAt">Start date:</label>
        <label htmlFor="finishedAt">End date:</label>
        <input
          className={dateClassName}
          type="date"
          name="startedAt"
          id="startedAt"
          required
          value={startedAt}
          onChange={(event) => {
            setStartedAt(event.target.value);
          }}
        />
        <input
          className={dateClassName}
          type="date"
          name="finishedAt"
          id="finishedAt"
          value={finishedAt}
          onChange={(event) => {
            setFinishedAt(event.target.value);
          }}
        />
      </fieldset>
      <CommaSeparatedValueInput
        fieldName="tools"
        label="Tools"
        placeholder="Ruby on Rails,Svelte,PostgreSQL"
        selection={tools}
        setSelection={setTools}
      />
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

const dateClassName = classes([
  "border-color-cyan",
  "border-rounded-8",
  "border-style-inset",
  "border-width-1",
  "squeeze-8",
  "squish-8",
  "surface-char",
  "text-color-cyan",
]);
