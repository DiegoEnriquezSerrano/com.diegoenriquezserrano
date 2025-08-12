// components
import CategoryRow from "@/components/categoryRow";
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import Icon from "@/components/icon";

// services
import CategoryService from "@/services/CategoryService";

// types
import type { CategoryType } from "@/types/CategoryTypes";

export default async function CategoriesPage() {
  let categories: CategoryType[] = [];

  const { getCategoriesByUsername } = CategoryService.Api;

  try {
    const [categoriesRequest] = await Promise.all([
      getCategoriesByUsername(
        { username: String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME) },
        {},
      ),
    ]);

    if (categoriesRequest.response.ok) categories = categoriesRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);

    categories = [];
  }

  if (process.env.VITE_DEBUG) {
    console.log("categories: ", categories);
  }

  return (
    <BaseLayoutPageWrapper>
      <main
        className="display-flex flex-column align-items-center full-width squish-48"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="flex-row full-width justify-content-center stack-48 drop-0 text-extra-large line-height-extra-large align-items-center gap-8">
          <Icon type="tags" opts={{ height: "1.5rem", width: "1.5rem" }} />
          Categories
        </h1>
        {categories.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </main>
    </BaseLayoutPageWrapper>
  );
}
