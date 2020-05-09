import { MouseEvent } from 'react'

export interface Props {
  className?: string
  onClickBrowseFiles: (event: MouseEvent) => void
  onClickBrowseFolders: (event: MouseEvent) => void
  onClickClear: (event: MouseEvent) => void
}
