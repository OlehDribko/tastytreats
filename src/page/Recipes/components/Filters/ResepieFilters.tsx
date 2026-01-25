import LabeledSelect from "../../../../component/Form/LabeledSelect";
import { Areas, Ingredients, Time } from "../../../../types/types";
import { optionsArea, optionsIngredients, optionsTime } from "./constants";

export default function RecipesFilters() {
  return (
    <>
      <LabeledSelect<Time> options={optionsTime} label="Time" />
      <LabeledSelect<Areas> options={optionsArea} label="Area" />
      <LabeledSelect<Ingredients>
        options={optionsIngredients}
        label="Ingredients"
      />
    </>
  );
}
// по прикладу цього файлу зробити enum для усіх інших
