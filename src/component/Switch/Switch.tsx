import MuiSwitch from "@mui/material/Switch";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export default function Switch({
  checked,
  onChange,
  disabled = false,
  "aria-label": ariaLabel = "theme switch",
}: SwitchProps) {
  const handleChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    nextChecked: boolean
  ) => {
    onChange(nextChecked);
  };

  return (
    <MuiSwitch
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      inputProps={{ "aria-label": ariaLabel }}
    />
  );
}
