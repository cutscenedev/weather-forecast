
import { SxProps } from "@mui/material/styles"
import TextField from "@mui/material/TextField"

interface Props {
  value: string
  onChange: (v: string) => void
  onEnterPress: () => void
  onBlur: () => void
  disabled: boolean
  autoFocus?: boolean
  sx?: SxProps
}

export default function SearchInput({
  value,
  onChange,
  onEnterPress,
  onBlur,
  disabled,
  autoFocus = false,
  sx,
}: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  }

  return (
    <TextField
      autoFocus={autoFocus}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      placeholder="Berlin"
      sx={sx}
    />
  )
}
