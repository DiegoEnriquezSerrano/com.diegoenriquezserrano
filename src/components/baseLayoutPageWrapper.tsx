// components
import BaseFooter from "@/components/baseFooter";
import BaseHeader from "@/components/header/baseHeader";
import HeaderCategories from "@/components/headerCategories";
import NavigationOverlay from "@/components/navigation/navigationOverlay";
import SubscribeButton from "./subscribeButton";

// services
import CategoryService from "@/services/CategoryService";
import UserService from "@/services/UserService";

// types
import type { ProfileType } from "@/types/UserTypes";
import type { CategoryType } from "@/types/CategoryTypes";

const { getCategoriesByUsername } = CategoryService.Api;
const { getProfileByUsername } = UserService.Api;

export default async function BaseLayoutPageWrapper({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: { showCategories?: boolean };
}) {
  const showCategories = props?.showCategories || false;
  const username = String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME);

  let categories: CategoryType[] = [];
  let profile: ProfileType | undefined;

  try {
    const [categoriesRequest, profileRequest] = await Promise.all([
      getCategoriesByUsername({ username }, {}),
      getProfileByUsername({ username }, {}),
    ]);

    if (categoriesRequest.response.ok) categories = categoriesRequest.json;
    if (profileRequest.response.ok) profile = profileRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("categories: ", categories);
    console.log("profile: ", profile);
  }

  return (
    <main
      className="display-grid full-width height-view-100 overflow-hidden font-orbitron"
      id="app"
    >
      <BaseHeader>
        <div className="flex-row full-height align-items-center squeeze-16">
          diego enriquez-serrano
        </div>
        <SubscribeButton />
      </BaseHeader>
      <section
        id="content"
        className="overflow-y-auto overflow-x-hidden letter-spacing-2"
        style={{ gridArea: "basecontent" }}
      >
        <HeaderCategories categories={categories} show={showCategories} />
        {children}
      </section>
      <BaseFooter />
      <NavigationOverlay
        profile={profile}
        categories={categories}
        links={[
          { path: "/", label: "Home", icon: "home" },
          { path: "/about", label: "About", icon: "profile" },
          { path: "/categories", label: "Categories", icon: "tags" },
          { path: "/posts", label: "Posts", icon: "article" },
          { path: "/projects", label: "Projects", icon: "projects" },
        ]}
      />
    </main>
  );
}
