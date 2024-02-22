import { FaRegTrashCan, FaTrash } from 'react-icons/fa6'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@renderer/store'
import { LuTrash2 } from 'react-icons/lu'

export const DeleteNoteButton = ({ className, ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeletion = async () => {
    await deleteNote()
  }
  return (
    <ActionButton
      className={`flex items-center justify-start ${className}`}
      onClick={handleDeletion}
      {...props}
    >
      <LuTrash2 className="mr-2" />
      <span className="text-xs"> Delete</span>
    </ActionButton>
  )
}
