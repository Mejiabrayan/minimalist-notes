import { ComponentProps } from 'react'
import { DeleteNoteButton, NewNoteButton } from '@/components'

export const ActionButtonsRow = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`} {...props}>
      <NewNoteButton className="text-white bg-transparent hover:bg-gray-700 py-2 px-4 rounded" />
      <DeleteNoteButton className="text-white bg-transparent hover:bg-gray-700 py-2 px-4 rounded" />
    </div>
  )
}
