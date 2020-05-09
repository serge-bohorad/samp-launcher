export interface Props {
  className?: string
  pair: Pair<string>
  onClickDelete: (pair: Pair<string>) => void
}
