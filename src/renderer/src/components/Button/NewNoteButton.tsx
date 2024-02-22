import { LuFileSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '@renderer/store'
import { HiOutlineFolderAdd } from 'react-icons/hi'

export const NewNoteButton = ({ className, ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton
      className={`flex items-center justify-start ${className}`}
      onClick={handleCreation}
      {...props}
    >
      <HiOutlineFolderAdd className="mr-2" />
      <span className="text-xs"> New</span>
    </ActionButton>
  )
}
