import { CategoryItems } from "../../types/types";
import type { CategoryItem } from "./components/Filters/CategoryFilter";

export const categories: CategoryItem[] = Object.entries(CategoryItems)
  .filter(([key]) => Number.isNaN(Number(key)))
  .map(([label, value]) => ({
    id: String(value),
    label: label.replace(/_/g, " ").toLowerCase(),
  }));
