
import Autocomplete from "@mui/material/Autocomplete"
import { SxProps } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { WeatherSearchHistory } from "./useHomePageStore"
import CloseIcon from '@mui/icons-material/Close';
import Icon from "@mui/material/Icon"
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

interface Props {
  value: string
  searchHistory: WeatherSearchHistory
  onInputChange: (v: string) => void
  onSelect: (v: string) => void
  onDelete: (v: string) => void
  onEnterPress: () => void
  disabled: boolean
  autoFocus?: boolean
  sx?: SxProps
}

export default function SearchInput({
  value,
  searchHistory,
  onInputChange,
  onSelect,
  onDelete,
  onEnterPress,
  disabled,
  autoFocus = false,
  sx,
}: Props) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  }

  return (
    <Autocomplete
      clearOnEscape
      disableClearable
      blurOnSelect
      value={value}
      autoFocus={autoFocus}
      disabled={disabled}
      onChange={(_, v) => onSelect(v || "")}
      inputValue={value}
      onInputChange={(_, v) => onInputChange(v)}
      onKeyDown={handleKeyDown}
      options={searchHistory}
      sx={sx}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        function handleDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
          onDelete(option)

          e.stopPropagation();
        }

        return (
          <li key={key} {...optionProps}>
            {option}
            <Box width="100%" />
            <IconButton onClick={handleDeleteClick}>
              <CloseIcon />
            </IconButton>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="City"
          placeholder="Berlin"
        />
      )}
    />
  )
}
