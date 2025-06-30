
import Autocomplete from "@mui/material/Autocomplete"
import { SxProps } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { WeatherSearchHistory } from "./stores/useSearchHistoryStore";

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

export default function CitySearchInput({
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
      fullWidth
      clearOnEscape
      disableClearable
      size="small"
      value={value}
      autoFocus={autoFocus}
      disabled={disabled}
      inputValue={value}
      onChange={(_, v) => onSelect(v || "")}
      onInputChange={(_, v) => onInputChange(v)}
      onKeyDown={handleKeyDown}
      options={searchHistory}
      sx={sx}

      slotProps={{
        listbox: {
          style: {
            maxHeight: 200, // 3 items * 48px (default item height)
            overflowY: 'auto',
          }
        }
      }}

      renderInput={(params) => (
        <TextField
          {...params}
          label="City"
          placeholder="Berlin"
        />
      )}

      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        function handleDeleteClick(e: React.MouseEvent<HTMLButtonElement>) {
          onDelete(option)

          e.stopPropagation();
        }

        return (
          <li
            key={key}
            {...optionProps}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {option}
            <IconButton size="small" onClick={handleDeleteClick}>
              <CloseIcon />
            </IconButton>
          </li>
        );
      }}
    />
  )
}
