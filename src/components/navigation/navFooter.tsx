import {classes} from "@/utils";
import Icon from "@/components/icon";
import NavSubscriptionForm from "@/components/navSubscriptionForm";
import type {CategoryType} from "@/types/CategoryTypes";
import type {IconType} from "@/types/IconTypes";
import type {ProfileType} from "@/types/UserTypes";

export default function NavFooter(props: {
  links?: {path: string; label: string; icon: IconType}[];
  categories: CategoryType[];
  profile?: ProfileType;
}) {
  return (
    <footer
      className={navFooterClassName}
      style={{gridTemplateAreas: `"intro" "email" "links" "legal"`}}
    >
      <div
        className="stack-48 squeeze-16 text-color-white"
        style={{gridArea: "intro"}}
      >
        diegoenriquezserrano.com
      </div>
      <div className="stack-48 squeeze-16" style={{gridArea: "email"}}>
        <NavSubscriptionForm />
      </div>
      <div
        className="gap-24 display-grid squeeze-16 stack-48"
        style={{
          gridArea: "links",
          gridTemplateAreas: `"cats" "misc" "social"`,
        }}
      >
        <div className={ulClassName} style={{gridArea: "cats"}}>
          <p className="stack-16 text-large text-color-white">Categories</p>
          <ul
            className="display-grid gap-8"
            style={{gridTemplateColumns: "1fr"}}
          >
            {props.categories?.map((category) => (
              <li key={category.slug}>
                <a
                  href={category.slug}
                  className="text-medium font-weight-normal"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={ulClassName} style={{gridArea: "misc"}}>
          <p className="stack-16 text-large text-color-white">General</p>
          <ul className="display-grid gap-8">
            {props.links?.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="text-medium font-weight-normal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={ulClassName}
          style={{
            gridArea: "social",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <a
            href={`https://bsky.app/profile/${props.profile?.bluesky}`}
            className="squeeze-4 squish-4"
            target="_blank"
          >
            <Icon type="bluesky" />
          </a>
          <a
            href={`https://github.com/${props.profile?.github}`}
            className="squeeze-4 squish-4"
            target="_blank"
          >
            <Icon type="github" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${props.profile?.linkedin}`}
            className="squeeze-4 squish-4"
            target="_blank"
          >
            <Icon type="linkedin" />
          </a>
        </div>
      </div>
      <div
        className="stack-16 squeeze-16 text-color-white"
        style={{gridArea: "legal"}}
      >
        <p>Diego Enriquez-Serrano.</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const navFooterClassName = classes([
  "display-grid",
  "footer",
  "full-width",
  "letter-spacing-2",
  "squish-16",
]);

const ulClassName = classes([
  "border-color-turquoise",
  "border-rounded-16",
  "border-style-outset",
  "border-style-solid",
  "border-width-1",
  "raised-1",
  "squeeze-32",
  "squish-24",
  "surface-char",
]);
