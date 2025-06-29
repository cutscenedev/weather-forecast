import Input from "@mui/material/Input"

interface Props {
  value: string
  onChange: (v: string) => void
  onEnterPress: () => void
  onBlur: () => void
}

export default function SearchInput({
  value,
  onChange,
  onEnterPress,
  onBlur,
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
    <Input
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        placeholder="London"
      />
  )
}
