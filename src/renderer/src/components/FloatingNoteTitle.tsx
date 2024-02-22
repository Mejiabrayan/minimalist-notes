import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null

  return (
    <div className={twMerge('flex justify-center items-center', className)} {...props}>
      <span
        className="bg-clip-text text-transparent bg-gradient-to-r from-[#87c1ed] to-[#8dafcb] text-2xl font-bold
      "
      >
        {selectedNote.title}
      </span>
    </div>
  )
}
