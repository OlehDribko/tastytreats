import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useId } from "react";

import type { Option } from "../../types/types";
import { StyledFormLabel } from "./LabeledSelect.styled";

type Props<T extends number | string> = {
  options: Option<T>[];
  label: string;
  defaultValue: T;
  onChange: (value: T) => void;
};

export default function LabeledSelect<T extends number | string>({
  options,
  label,
  defaultValue,
  onChange,
}: Props<T>) {
  const baseId = useId();

  const handleChange = (event: SelectChangeEvent<T>) => {
    const rawValue = event.target.value;
    const value = options.find((option) => option.value === rawValue)?.value;
    if (value !== undefined) onChange(value);
  };

  return (
    <FormControl fullWidth>
      <StyledFormLabel id={baseId}>{label}</StyledFormLabel>
      <Select
        labelId={baseId}
        label={label}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
