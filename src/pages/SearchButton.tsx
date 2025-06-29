import Button from "@mui/material/Button";

interface Props {
  onClick: () => void
}

export default function SearchButton({
  onClick
}: Props) {
  return (
    <Button
      variant="text"
      onClick={onClick}
    >
      Search
    </Button>
  )
}
