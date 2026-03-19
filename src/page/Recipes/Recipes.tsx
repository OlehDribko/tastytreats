import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useEffect } from "react";

import { getRecipes } from "../../api/recipes";
import { FilteredCategory } from "./components/Filters/CategoryFilter";
import RecipesFilters from "./components/Filters/ResepieFilters";
import { categories } from "./dataCategory";
import { FormWrapper } from "./styled";

export default function Recipes() {
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        await getRecipes();
      } catch (error) {
        console.error("Failed to load recipes:", error);
      }
    };

    loadRecipes();
  }, []);

  return (
    <>
      <FilteredCategory categories={categories} />
      <FormWrapper>
        <FormControl fullWidth>
          <FormLabel
            htmlFor="recipes-search"
            sx={(theme) => ({
              mb: 0.75,
              fontSize: 14,
              lineHeight: 1.3,
              color: theme.palette.text.secondary,
              "&.Mui-focused": {
                color: theme.palette.text.secondary,
              },
            })}
          >
            Search
          </FormLabel>
          <OutlinedInput
            id="recipes-search"
            type="search"
            placeholder="Enter Text"
            sx={{
              borderRadius: "15px",
            }}
          />
        </FormControl>
        <RecipesFilters />
      </FormWrapper>
    </>
  );
}
