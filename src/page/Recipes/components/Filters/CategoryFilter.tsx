import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { TitleCategory } from "./styled";

export type CategoryItem = {
  id: string;
  label: string;
};

type FilteredCategoryProps = {
  categories: CategoryItem[];
  selectedCategoryId?: string;
  onSelectCategory?: (categoryId: string) => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export const FilteredCategory = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  disabled = false,
  "aria-label": ariaLabel = "recipe categories",
}: FilteredCategoryProps) => {
  return (
    <List dense disablePadding aria-label={ariaLabel}>
      <TitleCategory>All categories</TitleCategory>
      {categories.map((category) => (
        <ListItem key={category.id} disablePadding>
          <ListItemButton
            disabled={disabled}
            selected={category.id === selectedCategoryId}
            onClick={() => onSelectCategory?.(category.id)}
          >
            <ListItemText primary={category.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
