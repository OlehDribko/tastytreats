import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

import type { Option } from "../../types/types";

type Props<T extends string | number> = {
  options: Option<T>[];
  label: string;
  value?: T;
  onChange?: (value: T) => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export default function LabeledSelect<T extends string | number>({
  options,
  label,
  value,
  onChange,
  disabled = false,
  "aria-label": ariaLabel,
}: Props<T>) {
  const baseId = label.replace(/\s+/g, "-").toLowerCase();
  const labelId = `select-${baseId}-label`;
  const selectId = `select-${baseId}`;

  // Map "stringified value" -> original typed value (T)
  const valueMap = React.useMemo(() => {
    const m = new Map<string, T>();
    for (const opt of options) m.set(String(opt.value), opt.value);
    return m;
  }, [options]);

  // MUI/DOM value must be string (controlled)
  const stringValue = value === undefined ? "" : String(value);

  const handleChange = (e: SelectChangeEvent<string>) => {
    const raw = e.target.value; // string
    const next = valueMap.get(raw);
    if (next !== undefined) onChange?.(next);
  };

  return (
    <FormControl fullWidth>
      <FormLabel
        id={labelId}
        sx={(theme) => ({
          mb: 0.75,
          fontSize: 14,
          lineHeight: 1.3,
          color: theme.palette.text.secondary,
          "&.Mui-focused": { color: theme.palette.text.secondary },
        })}
      >
        {label}
      </FormLabel>

      <Select
        id={selectId}
        labelId={labelId}
        value={stringValue}
        onChange={handleChange}
        disabled={disabled}
        inputProps={ariaLabel ? { "aria-label": ariaLabel } : undefined}
      >
        {/* Опційно: placeholder/empty */}
        <MenuItem value="">
          <em>—</em>
        </MenuItem>

        {options.map(({ label: optionLabel, value: optionValue }) => (
          <MenuItem key={String(optionValue)} value={String(optionValue)}>
            {optionLabel}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
