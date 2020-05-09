export interface Props {
  className?: string
  extraInject: Pair<string>[]
  onClickDeleteItem: (pair: Pair<string>) => any
}
