import { useState } from "react";

import LabeledSelect from "../../../../component/Form/LabeledSelect";
import type { Areas, Ingredients, Time } from "../../../../types/types";
import { optionsArea, optionsIngredients, optionsTime } from "./constants";

export default function RecipesFilters() {
  const [time, setTime] = useState<Time>(optionsTime[0].value);
  const [area, setArea] = useState<Areas>(optionsArea[0].value);
  const [ingredients, setIngredients] = useState<Ingredients>(
    optionsIngredients[0].value,
  );

  return (
    <>
      <LabeledSelect
        options={optionsTime}
        label="Time"
        defaultValue={time}
        onChange={(value) => setTime(value as Time)}
      />
      <LabeledSelect
        options={optionsArea}
        label="Area"
        defaultValue={area}
        onChange={(value) => setArea(value as Areas)}
      />
      <LabeledSelect
        options={optionsIngredients}
        label="Ingredients"
        defaultValue={ingredients}
        onChange={(value) => setIngredients(value as Ingredients)}
      />
    </>
  );
}
// по прикладу цього файлу зробити enum для усіх інших
