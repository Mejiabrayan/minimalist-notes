import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@renderer/store'
// import { deleteNoteAtom } from '@renderer/store'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeletion = async () => {
    deleteNote()
  }
  return (
    <ActionButton onClick={handleDeletion} {...props}>
      <FaRegTrashCan className="w-3 h-3 text-blue-400" />
    </ActionButton>
  )
}
