import Button from "@mui/material/Button";

interface Props {
  onClick: () => void
  loading: boolean
}

export default function SearchButton({
  onClick,
  loading,
}: Props) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      loading={loading}
    >
      Search
    </Button>
  )
}
